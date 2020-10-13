import React from 'react';
import './style.css';
import {
  Button,
  RadioButton,
  Select
} from '@shopify/polaris';

import { getQueryStringValue, sortObjectByName } from '../utils/utils';

class PriceCommunes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      communes: [],
      communeSelected: -1,
      communeSelectedName: '',
      options: [],
      optionSelected: 0,
      regions: [],
      regionSelected: -1,
      defaultMessage: this.props.defaultMessage,
      show: false,
    };

    this.shopName = getQueryStringValue('shop');
    this.confUrl = `https://${this.shopName}/apps/appdespachochile/configurations`;
    this.config = [];
  };

  componentDidMount() {
    this.getData();
  }

  handleSelectCommune = (value) => {
    const options = this.searchOptions(this.state.regionSelected, value);
    const optionSelected = (options.length > 0) ? options[0].id : 0;

    this.setState({
      options,
      optionSelected,
      communeSelected: value.toString(),
    });
  };

  handleSelectRegion = (value) => {
    const communes = this.setOptionsCommunes(value);

    this.setState({
      options: [],
      optionSelected: -1,
      communeSelected: '-1',
      communes,
      regionSelected: value.toString(),
    });
  };

  handleAgregarDelivery = () => {
    console.log(this.state.optionSelected);
  }

  getData = () => {
    const that = this;

    fetch(`${that.confUrl}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        if (typeof myJson.error == 'undefined') {
          const conf = myJson.configurations[0].regions;
          const regs = myJson.regions;

          that.setState({
            config: conf,
            regions: regs,
            show: true
          });
        } else {
          console.log(myJson.error);
        }
      });
  };

  setOptionsCommunes = (id) => {
    const options = [{disabled: true, label: 'Seleccionar comuna', value: '-1'}];

    this.state.regions.forEach((region) => {
      if (region.id === id.toString()) {
        const communes = sortObjectByName(region.communes);

        communes.forEach((commune) => {
          options.push({label: commune.name, value: commune.id});
        });
      }
    });

    return options;
  };

  setOptionsRegions = () => {
    const options = [{disabled: true, label: 'Seleccionar región', value: '-1'}];
    
    if (this.state.regions.length > 0) {
      this.state.regions.forEach((region) => {
        options.push({label: `Región de ${region.name}`, value: region.id});
      });
    }

    return options;
  };

  searchOptions = (idRegion, idCommune) => {
    const config = this.state.config;
    let options = [];

    if (config.length < 0) {
      return options;
    }

    config.forEach((region) => {
      if (region.id === idRegion) {
        region.communes.forEach((commune) => {
          if (commune.id === idCommune) {
            options = commune.options;
          }
        });
      } 
    });

    return options;
  };

  renderOptions = () => {
    const options = this.state.options;

    if (options.length <= 0 && this.state.communeSelected >= 0) {
      return (
        <div className="priceCommune-message">
          {this.state.defaultMessage}
        </div>
      );
    }
  
    return options.map((op) => {
      const price = op.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const message = `$${price}`;

      return (
        <div className="priceCommunes-radio" key={op.id}>
          <RadioButton
            label={op.description}
            helpText={message}
            checked={!this.state.deliveryCheck}
            disabled={this.state.deliveryCheck}
            name="deliverySelect"
          >
          </RadioButton>
        </div>
      );
    });
  };

  render() {
    const optionsRegions = this.setOptionsRegions();

    return (
      <div className={this.state.show ? 'priceCommunes--show' : 'priceCommunes--hide'}>
        <div className="priceCommunes-container">
          <div className="priceCommunes-select priceCommunes-regions">
            <Select
              options={optionsRegions}
              onChange={this.handleSelectRegion}
              value={this.state.regionSelected}
            />
          </div>

          <div className="priceCommunes-select priceCommunes-regions">
            <Select
              options={this.state.communes}
              onChange={this.handleSelectCommune}
              value={this.state.communeSelected}
            />
          </div>

          <div className="priceCommunes-options">
            {this.renderOptions()}
          </div>

          <div className="priceCommunes-button">
            <Button
              primary
              onClick={this.handleAgregarDelivery}
              loading={!this.state.show}
              disabled={this.state.options.length === 0}
            >
              Agregar
            </Button>
          </div>
        </div>
      </div>
    );
  };
}

export default PriceCommunes;