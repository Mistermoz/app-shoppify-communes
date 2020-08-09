import {
  Button,
  Card,
  Heading,
  Layout,
  Page 
} from '@shopify/polaris';
import TableCommunes from './components/TableCommunes';
import './css/_app.css';

const communesAdded = [
  {
    id: 23,
    regionId: 1,
    name: 'Las Condes',
    price: 2000,
    text: 'Politicas'
  },
  {
    id: 25,
    regionId: 1,
    name: 'Providencia',
    price: 3000,
    text: 'Politicas de 2'
  }
]

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <div className="communeApp">
        <Page
          fullWidth
        >
          <Layout>
            <Layout.Section>
              <Heading element="h1">Comunas sin despacho</Heading>
              <div className="buttonAgregar">
                <Button primary>Agregar a la lista</Button>
              </div>
              <Card>
                <TableCommunes communes={communesAdded}></TableCommunes>
              </Card>
            </Layout.Section>
            <Layout.Section>
              <Heading element="h1">Comunas sin despacho</Heading>
            </Layout.Section>
          </Layout>
        </Page>

      </div>
    );
  }
}

export default Index;