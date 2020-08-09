import './style.css';
import {
  Button,
  ButtonGroup
} from '@shopify/polaris';

class TableCommunes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      communes: this.props.communes,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const index = e.target.dataset.index;
    const type = e.target.dataset.type;
    const communes = this.state.communes;
    communes[index][type] = e.target.value;
    this.setState({
      communes
    });
  }

  sumbitCommune(id) {
    const communeUpdate = this.state.communes.filter((commune) => commune.id === id);

    console.log(communeUpdate);
  }

  renderTableData() {
    return this.state.communes.map((commune, index) => {
       let { id, name } = commune
       return (
          <div className="tableCommune-row" key={id}>
            <div className="tableCommune-col col1">{name}</div>
            <div className="tableCommune-col col2">
              <input type="text" value={this.state.communes[index].price} data-index={index} data-type="price" onChange={this.handleChange}></input>
            </div>
            <div className="tableCommune-col col3">
              <input type="text" value={this.state.communes[index].text} data-index={index} data-type="text" onChange={this.handleChange}></input>
            </div>
            <div className="tableCommune-col col4">
            <ButtonGroup segmented>
              <Button>Borrar</Button>
              <Button onClick={() => this.sumbitCommune(id)}>Guardar</Button>
            </ButtonGroup>
            </div>
          </div>
       )
    })
  }
  render() {
    return (
      <div className="tableCommune-container">
        <header className="tableCommune-row">
          <div className="tableCommune-col col1">Comuna</div>
          <div className="tableCommune-col col2">Precio</div>
          <div className="tableCommune-col col3">Política de despacho</div>
          <dic className="tableCommune-col col4">Acciones</dic>
        </header>
        {this.renderTableData()}
      </div>
    );
  }
}

export default TableCommunes;