import './style.css';
import {
  Button,
  ButtonGroup,
  ChoiceList,
  Heading,
  Select
} from '@shopify/polaris';

class SelectCommunes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: this.props.regions,
      communeSelected: [],
      regionSelected: this.props.regdefault,
      regionSelectedName: '',
      communesList: []
    };
  };

  componentDidMount() {
    setTimeout(() => {
      this.handleSelectChange(this.props.regdefault);
    }, 1000);
  } 

  static getDerivedStateFromProps = (nextProps) => {
    return { regions: nextProps.regions };
  };

  addCommunes = () => {
    const options = {
      region: {
        id: this.state.regionSelected,
        name: this.state.regionSelectedName
      },
      selected: this.getCommunesByID(this.state.communeSelected),
    };
    
    this.props.returnSelected(options);
  };

  handleSelectChange = (value) => {
    const communes = this.setOptionsCommunes(value);
    let regName = '';

    this.props.regions.map((region) => {
      if (region.ID === value) {
        regName = region.name
      }
    });
    this.setState({ regionSelected: value, communesList: communes, regionSelectedName: regName });
  };

  handleChangeList = (value) => {
    this.setState({ communeSelected: value });
  }

  getCommunesByID = (ids) => {
    const options = [];

    ids.map((id) => {
      this.state.regions.map((region) => {
        if (this.state.regionSelected === region.ID, 10) {
          region.communes.map((commune) => {
            if (id === commune.ID) {
              options.push({id, name: commune.name, region: region.name});
            }
          });
        }
      });
    });

    return options;
  }

  setOptionsCommunes = (id) => {
    const options = [];

    this.state.regions.map((region) => {
      if (region.ID == id) {
        region.communes.map((commune) => {
          options.push({label: commune.name, value: commune.ID});
        });
      }
    });

    return options;
  };

  setOptionsRegions = () => {
    const options = [];

    this.state.regions.map((region) => {
      options.push({label: region.name, value: region.ID});
    });

    return options;
  };

  showCommunesList = () => {
    if (this.state.communesList === 0) {
      return '';
    }

    return  (
      <div className="selectCommunes-listCommunes">
        <ChoiceList
          allowMultiple
          choices={this.state.communesList}
          selected={this.state.communeSelected}
          onChange={this.handleChangeList}
        ></ChoiceList>
      </div>
    );
  };

  render() {
    const optionsRegions = this.setOptionsRegions();

    return (
      <div className="selectCommunes">
        <div className="selectCommunes-container">
          <Heading>Seleccionar Comunas por Región</Heading>

          <Select
            options={optionsRegions}
            onChange={this.handleSelectChange}
            value={this.state.regionSelected}
          />
          { this.showCommunesList() }

          <ButtonGroup segmented>
              <Button>Cancelar</Button>
              <Button
                primary
                onClick={() => this.addCommunes()}
                disabled={this.state.communeSelected.length === 0}
              >
                Seleccionar
              </Button>
            </ButtonGroup>
        </div>
      </div>
    );
  };
}

export default SelectCommunes;