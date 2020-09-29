import './style.css';
import {
  Button,
  ButtonGroup,
  Heading
} from '@shopify/polaris';

class TableCommunes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      communes: props.communes,
      server: this.props.communesServer,
      buttonDisabled: props.buttonState,
    };
  };

  static getDerivedStateFromProps = (nextProps) => {
    return { communes: nextProps.communes, buttonDisabled: nextProps.buttonState };
  };

  handleChange = (e) => {
    const {indexreg, indexcommune, type } = e.target.dataset;
    const newCommunes = this.state.communes;
    const oldCommunes = this.state.server;
    const newVal = e.target.value;
    const communeID = newCommunes[indexreg].communes[indexcommune].ID;
    const buttonsDisabled = this.state.buttonDisabled;
  
    if (newVal !== '' && !Number(newVal)) {
        return;
    }

    if (oldCommunes[indexreg] && oldCommunes[indexreg].communes[indexcommune]) {
      const oldVal = oldCommunes[indexreg].communes[indexcommune].options[0][type];
      buttonsDisabled[communeID] = (newVal !== oldVal) ? false : true;
    }    

    newCommunes[indexreg].communes[indexcommune].options[0][type] = newVal;

    this.setState({
      communes: newCommunes,
      buttonsDisabled
    });
  };

  renderTableData = (communes, indRegion) => {
    return communes.map((commune, indCommune) => {
       const { id, name } = commune;

       return (
          <div className="tableCommune-row" key={id}>
            <div className="tableCommune-col col1">{name}</div>
            <div className="tableCommune-col col2">
              <input
                type="text"
                value={commune.options[0].price}
                data-indexreg={indRegion}
                data-indexcommune={indCommune}
                data-type="price"
                onChange={this.handleChange} />
            </div>
            <div className="tableCommune-col col3">
              <input
                  type="text"
                  value={commune.options[0].text}
                  data-indexreg={indRegion}
                  data-indexcommune={indCommune}
                  data-type="text"
                  onChange={this.handleChange} />
            </div>
            <div className="tableCommune-col col4">
            <ButtonGroup segmented>
              <Button>Borrar</Button>
              <Button
                primary
                onClick={() => this.sumbitCommune(id, indRegion)}
                disabled={this.state.buttonDisabled[id]}
              >
                Guardar
              </Button>
            </ButtonGroup>
            </div>
          </div>
       )
    })
  };
  
  renderRegionData = () => {
    return this.state.communes.map((data, index) => {
      const {id, name, communes} = data;
      return (
        <div className="region-row" key={id}>
          <Heading>{name}</Heading>
          <header className="tableCommune-row">
            <div className="tableCommune-col col1">Comuna</div>
            <div className="tableCommune-col col2">Precio</div>
            <div className="tableCommune-col col3">Políticas de despacho</div>
            <div className="tableCommune-col col4">Acciones</div>
          </header>
          
          {this.renderTableData(communes, index)}
        </div>
      );
    });
  };

  sumbitCommune = (id, region) => {
    const communeUpdate = this.state.communes[region].communes.filter((commune) => commune.ID === id);
    const buttonsDisabled = this.state.buttonDisabled;

    buttonsDisabled[id] = true;

    this.setState({
      buttonsDisabled
    });

    console.log(communeUpdate);
  };

  render() {
    return (
      <div className="communesAdded">
        <div className="regions-container">
          {this.renderRegionData()}
        </div>
      </div>
    );
  };
}

export default TableCommunes;