import React from 'react';
import CreditCardHolder from './components/CreditCardHolder.jsx';
import CONSTANTS from './data/cardInfo.js';

const CARDS_INFO = CONSTANTS.CARDS_INFO;


export default class Homepage extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div style={{display: "inline-flex", "flex-flow": "row wrap"}}>
            <CreditCardHolder src='images/RogersBank.png' size={'small'} info={CARDS_INFO[2]}/>
            <CreditCardHolder src='images/scotia/ScotiaGoldAmex.png'  size={'small'} info={CARDS_INFO[0]}/>
            <CreditCardHolder src='images/scotia/ScotiaPassportVisaInfinite.png' size={'small'} info={CARDS_INFO[1]}/>
            <CreditCardHolder src='images/HSBCElite.png' size={'small'} info={CARDS_INFO[3]}/>
            <CreditCardHolder src='images/scotia/ScotiaMomentumVisa.png' size={'small'} info={CARDS_INFO[4]}/>
        </div>)
    }
  }
  
  Homepage.propTypes = {
  };