import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from './data/cardInfo.js';
const CARDS_INFO = CONSTANTS.CARDS_INFO;
const CATEGORIES = CONSTANTS.CATEGORIES;
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const MY_CARDS_IDS = [
  1, 2, 4, 3, 5
]

const MY_CARDS_INFO = CARDS_INFO.filter(card => {
  return MY_CARDS_IDS.includes(card.id);
})



export default class MyCards extends React.Component {
  constructor() {
    super();
  }

  renderCardName(id) {
    return `${MY_CARDS_INFO[id].bank} ${MY_CARDS_INFO[id].name}`
  }

  renderRewards(id, cat) {
    return MY_CARDS_INFO[id].rewards[cat] ? MY_CARDS_INFO[id].rewards[cat] : MY_CARDS_INFO[id].rewards.others

  }

  renderAllSelection() {
    return (
      <table style={{ width: "100%" }}>
        <tr>
          <th>Category</th>
          {MY_CARDS_INFO.map((id, index) => {
            return (<th>{this.renderCardName(index)}</th>)
          })}
          {/* <th>{`${MY_CARDS_INFO[0].bank} ${MY_CARDS_INFO[0].name}`}</th>
          <th>{`${MY_CARDS_INFO[1].bank} ${MY_CARDS_INFO[1].name}`}</th>
          <th>{`${MY_CARDS_INFO[2].bank} ${MY_CARDS_INFO[2].name}`}</th> */}
        </tr>
        {Object.keys(CATEGORIES).map((cat, index) => {
          console.log("======cat ===, index---", cat, index)
          return <tr>
            <td>{CATEGORIES[cat]}</td>
            {MY_CARDS_INFO.map((id, index) => {
              return (<td>{this.renderRewards(index, cat)}</td>)
            })}
            {/* <td>{MY_CARDS_INFO[0].rewards[cat] ? MY_CARDS_INFO[0].rewards[cat] : MY_CARDS_INFO[0].rewards.others}</td>
            <td>{MY_CARDS_INFO[1].rewards[cat] ? MY_CARDS_INFO[1].rewards[cat] : MY_CARDS_INFO[1].rewards.others}</td>
            <td>{MY_CARDS_INFO[2].rewards[cat] ? MY_CARDS_INFO[2].rewards[cat] : MY_CARDS_INFO[2].rewards.others}</td> */}
          </tr>
        })}
      </table>
    )
  }

  renderSelection() {
    const amexNotAccept = false;
    return (
      <table style={{ width: "100%" }}>
        <tr>
          <th>Category</th>
          <th>Primary</th>
          <th>Secondary</th>
          {/* <th>Tertiary</th> */}
        </tr>
        {Object.keys(CATEGORIES).map((cat, index) => {
          return <tr>
            <td>{CATEGORIES[cat]}</td>
            <td>{this.calculateBestOption(cat, 0, amexNotAccept).toString().replace(/,/g, ' || ')}</td>
            <td>{this.calculateBestOption(cat, 1, amexNotAccept).toString().replace(/,/g, ' || ')}</td>
            {/* <td>{this.calculateBestOption(cat,2)}</td> */}
          </tr>
        })}
      </table>
    )
  }

  calculateBestOption(cat, order, amex) {
    let testData = MY_CARDS_INFO.map(info => {
      return {
        name: `${info.bank} ${info.name}`,
        type: info.type,
        reward: info.rewards[cat] ? info.rewards[cat] : info.rewards['others']
      }
    })

    if (amex) {
      testData = testData.filter(t => t.type !== 'Amex')
      console.log("====new testData==", testData)

    }
    console.log("====testData==", testData)
    testData.sort((t1, t2) => t1.reward < t2.reward ? 1 : -1);
    console.log("==sort==testData==", testData)

    let dataSet = {};
    testData.forEach(da => {
      if (!dataSet[da.reward.toString()]) {
        if (Object.keys(dataSet).length < 2)
          dataSet[da.reward.toString()] = [`(${da.reward}%) ${da.name}`];
      } else {
        if (Object.keys(dataSet).length <= 2)
          dataSet[da.reward.toString()].push(da.name)
      };

    })
    console.log("==sort==dataSet==", dataSet)
    const max = Math.max(Object.keys(dataSet)[0], Object.keys(dataSet)[1]);
    const min = Math.min(Object.keys(dataSet)[0], Object.keys(dataSet)[1]);
    return order === 0 ? dataSet[max] : dataSet[min];

  }

  renderCheckBox(category) {
    return (<FormControlLabel
      control={<Checkbox checked={true} onChange={null} color="primary" name={category} />}
      label={CATEGORIES[category]}
    />)
  }

  render() {
    const gilad = true;
    const jason = false;
    const antoine = false;
    return (
      <div style={{ flexDirection: 'column', background: "GhostWhite", height: '1000px', flex: 1, display: 'flex', justifyContent: 'flex-start', paddingTop: '50px' }}>
        <h1>I have {MY_CARDS_INFO.length} cards</h1>
        {/* {this.renderAllSelection()} */}
        {this.renderSelection()}
        <hr style={{ width: "100%" }} />
        <div style={{ background: 'lightblue', flex: 1, flexDirection: 'row', display: 'flex', padding: "16px" }}>
          <div style={{ background: '', flex: 1 }}>
            <h2>Filters</h2>
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Categories</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Assign responsibility</FormLabel>
                  <FormGroup>
                    {Object.keys(CATEGORIES).map(cat => {
                      return this.renderCheckBox(cat);
                    })}
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Card Types</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Assign responsibility</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={true} onChange={null} color="primary" name={'visa'} />}
                      label={"Visa"}
                    />
                    <FormControlLabel
                      control={<Checkbox checked={true} onChange={null} color="primary" name={'mastercard'} />}
                      label={"MasterCard"}
                    />
                    <FormControlLabel
                      control={<Checkbox checked={true} onChange={null} color="primary" name={'amex'} />}
                      label={"American Express"}
                    />
                  </FormGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Banks</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Assign responsibility</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={true} onChange={null} color="primary" name={'scotia'} />}
                      label={"ScotiaBank"}
                    />
                    <FormControlLabel
                      control={<Checkbox checked={true} onChange={null} color="primary" name={'rogers'} />}
                      label={"RogersBank"}
                    />
                    <FormControlLabel
                      control={<Checkbox checked={true} onChange={null} color="primary" name={'hsbc'} />}
                      label={"HSBC"}
                    />
                  </FormGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ background: 'yellow', flex: 3 }}>
            display
          </div>
        </div>
      </div>)
  }
}

MyCards.propTypes = {
};