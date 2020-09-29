require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY_NEXT, SHOPIFY_API_KEY_NEXT } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(session({ secure: true, sameSite: 'none' }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY_NEXT];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY_NEXT,
      secret: SHOPIFY_API_SECRET_KEY_NEXT,
      scopes: ['read_products, write_shipping, read_themes, write_themes'],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });

        ctx.cookies.set('accessToken', accessToken, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });

        ctx.redirect('/');
      },
    }),
  );

  router.get('/api/:object', async (ctx) => {
    try {
      const results = await fetch("https://" + ctx.cookies.get('shopOrigin') + "/admin/api/2020-07/" + ctx.params.object + ".json", {
          headers: {
            "X-Shopify-Access-Token": ctx.cookies.get('accessToken'),
          },
      })
          .then(response => response.json())
          .then(json => {
              return json;
          });
      ctx.body = {
          status: 'success',
          data: results
      };
    } catch (err) {
        console.log(err)
    }
  });

  router.get('/api/themes/:id/assets', async (ctx) => {
    try {
      const results = await fetch("https://" + ctx.cookies.get('shopOrigin') + "/admin/api/2020-07/themes/" + ctx.params.id + "/assets.json", {
          headers: {
            "X-Shopify-Access-Token": ctx.cookies.get('accessToken'),
          },
      })
          .then(response => response.json())
          .then(json => {
              return json;
          });
      ctx.body = {
          status: 'success',
          data: results
      };
    } catch (err) {
        console.log(err)
    }
  });

  router.put('/api/themes/:id/assets', koaBody(), async (ctx) => {
    fs = require('fs');
    let cart = fs.readFileSync(__dirname+'/pages/cart.liquid', 'utf8');

    const body =  {
      "asset": {
        "key": "snippets/appdespachochile-cart.liquid",
        "value": cart
      }
    };
    
    try {
      const results = await fetch("https://" + ctx.cookies.get('shopOrigin') + "/admin/api/2020-07/themes/" + ctx.params.id + "/assets.json", {
          method: 'PUT',
          headers: {
            "X-Shopify-Access-Token": ctx.cookies.get('accessToken'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(json => {
              return json;
          });
      ctx.body = {
          status: 'success',
          data: results
      };
    } catch (err) {
        console.log(err)
    }
  });

  router.put(/^(?!.*api).*/, verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  router.get(/^(?!.*api).*/, verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});