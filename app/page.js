"use client"
import React, { Component } from 'react';
import { berekenMaximaleHypotheek } from './BerekenHypotheek'; 


class App extends Component {
  constructor() {
    super();
    this.state = {
      jaarinkomen: 0,
      partnerInkomen: 0, 
      rentevastePeriode: 1,
      maxTeLenenBedrag: 0,
      maandelijkseRente: 0,
      maandelijkseAflossing: 0,
      totaleMaandbedrag: 0,
      totaalBetaaldNa30Jaar: 0,
      postcode: '',
      heeftStudieschuld: false, 
    };
  }

  handleJaarinkomenChange = (event) => {
    this.setState({ jaarinkomen: parseFloat(event.target.value) });
  };

  
  handlePartnerInkomenChange = (event) => {
    this.setState({ partnerInkomen: parseFloat(event.target.value) });
  };

  handleStudieschuldStatusChange = (event) => {
    this.setState({ heeftStudieschuld: event.target.value === 'true' });
  };


  handleRentevastePeriodeChange = (event) => {
    this.setState({ rentevastePeriode: parseInt(event.target.value) });
  };

  
  handlePostcodeChange = (event) => {
    this.setState({ postcode: event.target.value });
  };
  

  berekenMaximaleHypotheek = () => {
    const { jaarinkomen, rentevastePeriode, postcode, partnerInkomen, heeftStudieschuld,maxTeLenenBedrag } = this.state;
    
    const verbodenPostcodes = ['9679', '9681', '9682'];

  
    if (verbodenPostcodes.includes(postcode.slice(0, 4))) {
      alert('Hypotheken worden voor dit postcodegebied niet geaccepteerd');
      return;
    }
    
  
    const berekeningen = berekenMaximaleHypotheek(jaarinkomen, partnerInkomen, rentevastePeriode, heeftStudieschuld,maxTeLenenBedrag);
  
    this.setState({
      ...berekeningen
    });
  };

  render() {
    const {    
      jaarinkomen,
      partnerInkomen, 
      rentevastePeriode,
      maxTeLenenBedrag,
      maandelijkseRente,
      maandelijkseAflossing,
      totaleMaandbedrag,
      totaalBetaaldNa30Jaar,
      heeftStudieschuld, 
    } = this.state;

    return (
      <div>
  <h1>Hypotheek Calculator</h1>
  <label>
    Bruto Jaarinkomen: €
    <input
      type="number"
      id="jaarinkomen"
      value={jaarinkomen}
      onChange={this.handleJaarinkomenChange}
    />
  </label>

  <label>
    Bruto Jaarinkomen Partner: €
    <input
      type="number"
      id="partnerInkomen"
      value={partnerInkomen}
      onChange={this.handlePartnerInkomenChange}
    />
  </label>
  <label>
    Heb je een studieschuld?
    <select
      id="heeftStudieschuld"
      value={heeftStudieschuld ? 'true' : 'false'}
      onChange={this.handleStudieschuldStatusChange}
    >
      <option value={'true'}>Ja</option>
      <option value={'false'}>Nee</option>
    </select>
  </label>
  <label>
    Rentevaste Periode:
    <select
      id="rentevastePeriode"
      value={rentevastePeriode}
      onChange={this.handleRentevastePeriodeChange}
    >
      <option value={1}>1 jaar</option>
      <option value={5}>5 jaar</option>
      <option value={10}>10 jaar</option>
      <option value={20}>20 jaar</option>
      <option value={30}>30 jaar</option>
    </select>
  </label>
  <label>
    Postcode:
    <input
      type="text"
      id="postcode"
      value={this.state.postcode}
      onChange={this.handlePostcodeChange}
    />
  </label>
  <button id="berekenButton" onClick={this.berekenMaximaleHypotheek}>
    Bereken Maximale Hypotheek
  </button>
  <p id="rentepercentage">Rentepercentage: {this.state.rentepercentage}%</p>
  <p id="maxTeLenenBedrag">Maximale Hypotheek: €{maxTeLenenBedrag.toFixed(2)}</p>
  <p id="maandelijkseRente">Maandelijkse Rente: €{maandelijkseRente.toFixed(2)}</p>
  <p id="maandelijkseAflossing">Maandelijkse Aflossing: €{maandelijkseAflossing.toFixed(2)}</p>
  <p id="totaleMaandbedrag">Totaal Maandbedrag: €{totaleMaandbedrag.toFixed(2)}</p>
  <p id="totaalBetaaldNa30Jaar">Totaal Betaald na 30 jaar: €{totaalBetaaldNa30Jaar.toFixed(2)}</p>
</div>

    );
  }
}

export default App;
