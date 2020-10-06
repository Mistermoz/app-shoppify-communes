import {
  Button,
  Card,
  Heading,
  Layout,
  Modal,
  Page,
  TextContainer
} from '@shopify/polaris';
import TableCommunes from './components/TableCommunes';
import SelectCommunes from './components/SelectCommunes';
import './css/_app.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false, 
      communes: [],
      communesServer: [],
      buttonState: {},
      regions: [],
      priceDefault: '4990',
      textDefualt: 'Normal'
    };

    //this.endPoint = 'https://appdespachochile.ddns.net/shop/pruebaziru-app.myshopify.com/configurations';
    this.endPoint = '/data/configurations.json';
    this.getData();
    this.origin = '';
  }

  componentDidMount() {
    this.setState({origin: window.location.origin})
  }

  addCommunesSelected = (options) => {
    const newCommunes = this.state.communes;
    const newButtonsState = this.state.buttonState;
    const noRegion = true;

    this.state.communes.map((region, indexRegion) => {
      if (parseInt(region.ID, 10) === options.region.id) {
        noRegion = false;
        options.selected.map((communeSelected) => {
          const op = region.communes.filter(
            (commune) => (commune.ID === communeSelected.id));

          if (op.length === 0) {
            newCommunes[indexRegion].communes.push({
              "name": communeSelected.name,
              "ID": communeSelected.id,
              "options": [
                {
                  "id": "1",
                  "price": this.state.priceDefault,
                  "text": this.state.textDefualt,
                }
              ]
            });

            newButtonsState[communeSelected.id] = false;
          }
        });
      }
    });

    if (noRegion) {
      const opComunes = [];

      options.selected.map((communeSelected) => {
        opComunes.push(
          {
            "name": communeSelected.name,
            "ID": communeSelected.id,
            "options": [
              {
                "id": "1",
                "price": this.state.priceDefault,
                "text": this.state.textDefualt,
              }
            ]
          }
        );

        newButtonsState[communeSelected.id] = false;
      });

      newCommunes.push({
        name: options.region.name,
        ID: options.region.id.toString(),
        communes: opComunes
      });
    }

    this.setState({ newCommunes, newButtonsState, open: false });
  }

  getData = () => {
    const that = this;

    fetch(that.endPoint)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        const conf = myJson.configurations[0].regions;
        const regs = myJson.regions;

        that.setState({
          buttonState: that.setButtonState(conf),
          communesServer: JSON.parse(JSON.stringify(conf)),
          communes: conf,
          regions: regs,
        });
      });
  };

  testApi = () => {
    var fetchUrlTheme = `${this.origin}/api/themes`;

    var method = "GET";
    fetch(fetchUrlTheme, {
        method: method
    })
    .then(response => response.json())
    .then(json => this.getAsset(json.data.themes[0]));
  }

  addScript = () => {
     const urlAsset = `${this.origin}/api/script/script_tags`;
    const method = 'POST';
    const body = {
      "script_tag": {
        "event": "onload",
        "src": "https://d5a0f90f679a.ngrok.io/js/test.js"
      }
    };

    fetch(urlAsset, {
      method,
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

  getAsset = (theme) => {
    const urlAsset = `${this.origin}/api/themes/${theme.id}/assets`;
    const method = 'GET';
    let temp = '';

    fetch(urlAsset, {
      method,
    })
    .then(response => response.json())
    .then(json => {
      temp = JSON.parse(json);
      console.log(temp);

      this.putAsset(theme, temp);
    });
  }

  putAsset = (theme, temp) => {
    const urlAsset = `${this.origin}/api/themes/${theme.id}/assets`;
    const method = 'PUT';
    const template = {...temp};

    template.shopify = {
      checkout: {
        contact: {
          "city_label": "Comuna",
          "city_placeholder": "Comuna",
          "postal_code_label": "Ciudad",
          "postal_code_placeholder": "Ciudad",
        }
      }
    };

    const body = {
      "asset": {
        "key": "locales/es.json",
        "value": JSON.stringify(template)
      }
    };

    fetch(urlAsset, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

  handleChange = () => {
    this.setState({ open: !this.state.open });
  };

  handleApi = () => {
    this.testApi();
  };

  setButtonState = (regions) => {
    const buttons = this.state.buttonState;

    regions.map((region) => {
      region.communes.map((commune) => {
        buttons[commune.ID] = true;
      })
    });

    return buttons;
  };

  showTable = () => {
    if (this.state.communes.length === 0) {
      return '';
    }

    return (
      <TableCommunes
        communes={this.state.communes}
        communesServer={this.state.communesServer}
        buttonState={this.state.buttonState}
      ></TableCommunes>
    )
  };

  showModal = () => {
    const that = this;

    return (
      <div style={{height: '600px'}}>
        <Modal
          open={this.state.open}
          onClose={this.handleChange}
          title="Agregar comunas"
        >
          <Modal.Section>
            <TextContainer>
              <SelectCommunes
                returnSelected={that.addCommunesSelected}
                regions={this.state.regions}
                regdefault={1}
              ></SelectCommunes>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <div className="communeApp">
        <Page
          fullWidth
        >
          <Layout>
            <Layout.Section>
              <Heading element="h1">Comunas con despacho</Heading>
              <div className="buttonAgregar">
                <Button primary onClick={this.handleChange}>Agregar a la lista</Button>
              </div>

              <div className="buttonAgregar">
                <Button primary onClick={this.handleApi}>Test Api</Button>
              </div>
              <Card>
                { this.showTable() }
              </Card>
            </Layout.Section>
            <Layout.Section>
              <Heading element="h1">Comunas sin despacho</Heading>
            </Layout.Section>
          </Layout>
          { this.showModal() }
        </Page>
      </div>
    );
  }
}

export default Index;