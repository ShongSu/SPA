import React from 'react';
import PropTypes from 'prop-types';
import CreditCardHolder from './components/CreditCardHolder.jsx';
import CONSTANTS from './data/cardInfo.js';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


const CARDS_INFO = CONSTANTS.CARDS_INFO;
export default class Page3 extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ['MasterCard', 'Visa', 'Amex']
    }
  }

  render() {
    const chipData = [
      { key: 'MasterCard', label: 'MasterCard' },
      { key: 'Visa', label: 'Visa' },
      { key: 'Amex', label: 'American Express' },
    ]

    const selectedData = chipData.filter(d => {
      return this.state.selected.includes(d.key)
    })

    const classRoot = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      margin: 0,
      padding: '8px',
      flex:1
    }

    const handleDelete = (chipToDelete) => () => {
      const { selected } = this.state;
      console.log("====selected==", selected)
      const newData = selected.filter((chip) => {
        return chip !== chipToDelete.key
      });
      console.log("====newData==", newData)

      this.setState({
        selected: newData
      })
    };

    const SELECTED_CARDS = CARDS_INFO.filter(card => {
      return this.state.selected.includes(card.type);
    })
    console.log("====SELECTED_CARDS==", SELECTED_CARDS)

    const handleChange = (event) => {
      this.setState({
        selected: event.target.value
      });
    };


    return (
      <div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', flexDirection:'row'}}>
      <FormControl style={{ flex:1}}>
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={this.state.selected}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
          >
            {chipData.map((name) => (
              <MenuItem key={name.key} value={name.key}>
                <Checkbox checked={this.state.selected.indexOf(name.key) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Paper component="ul" style={classRoot}>
          {selectedData.map((data) => {
            let icon;
            return (
              <li key={data.key}>
                <Chip
                  icon={icon}
                  label={data.label}
                  onDelete={handleDelete(data)}
                />
              </li>
            );
          })}
        </Paper>
        </div>
        <div style={{ display: "inline-flex", "flex-flow": "row wrap" }}>
          {SELECTED_CARDS.map(card => {
            return <CreditCardHolder src={`images/${card.url}.png`} size={'small'} info={card} />
          })}
          {/* <CreditCardHolder src='images/RogersBank.png' size={'small'} info={CARDS_INFO[2]} />
          <CreditCardHolder src='images/ScotiaAmex.png' size={'small'} info={CARDS_INFO[0]} />
          <CreditCardHolder src='images/ScotiaPassport.png' size={'small'} info={CARDS_INFO[1]} />
          <CreditCardHolder src='images/HSBCElite.png' size={'small'} info={CARDS_INFO[3]} />
          <CreditCardHolder src='images/ScotiaMomentumVisa.png' size={'small'} info={CARDS_INFO[4]} /> */}
        </div>
      </div>
    )
  }
}

Page3.propTypes = {
};