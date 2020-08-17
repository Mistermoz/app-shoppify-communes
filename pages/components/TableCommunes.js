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
      buttonDisabled: props.buttonState,
    };
  };

  static getDerivedStateFromProps = (nextProps) => {
    return { communes: nextProps.communes, buttonDisabled: nextProps.buttonState };
  };

  handleChange = (e) => {
    const {indexreg, indexcommune, type } = e.target.dataset;
    const newCommunes = this.state.communes;
    const newVal = e.target.value;
    const communeID = newCommunes[indexreg].communes[indexcommune].ID;
    const buttonsDisabled = this.state.buttonDisabled;

    if (!Number(newVal)) {
        return;
    }

    newCommunes[indexreg].communes[indexcommune].options[0][type] = newVal;
    buttonsDisabled[communeID] = false;

    this.setState({
      newCommunes,
      buttonsDisabled
    });
  };

  renderTableData = (communes, indRegion) => {
    return communes.map((commune, indCommune) => {
       const { ID, name } = commune;

       return (
          <div className="tableCommune-row" key={ID}>
            <div className="tableCommune-col col1">{name}</div>
            <div className="tableCommune-col col2">
              <input
                type="text"
                value={this.state.communes[indRegion].communes[indCommune].options[0].price}
                data-indexreg={indRegion}
                data-indexcommune={indCommune}
                data-type="price"
                onChange={this.handleChange} />
            </div>
            <div className="tableCommune-col col3">
              <input
                  type="text"
                  value={this.state.communes[indRegion].communes[indCommune].options[0].text}
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
                onClick={() => this.sumbitCommune(ID, indRegion)}
                disabled={this.state.buttonDisabled[ID]}
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
      const {ID, name, communes} = data;
      return (
        <div className="region-row" key={ID}>
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