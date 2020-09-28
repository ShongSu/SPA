import React from 'react';
import CONSTANTS from '../data/cardInfo.js';
const CATEGORIES = CONSTANTS.CATEGORIES;

const NotFound = () => <h1>Page Not Found</h1>;

export default class CreditCardHolder extends React.Component {

    constructor() {
        super();
    }

    renderCategory(categories) {
        return (
            <table style={{ width: "100%" }}>
                <tr>
                    <th>Category</th>
                    <th>Rewards</th>
                </tr>
                {Object.keys(CATEGORIES).map(cat => {
                    return <tr>
                        <td>{CATEGORIES[cat]}</td>
                        <td>{categories[cat] ? categories[cat] : categories['others']} %</td>
                    </tr>
                })}
            </table>
        )
    }

    renderMainInfo(info) {
        return (
            <div>
                <h5>Basic Info:</h5>
                <table>
                <tr>
                    <td>Annual Fee</td>
                    <td>{info.anunal_fee}</td>
                </tr>
                <tr>
                    <td>Additional Card</td>
                    <td>{info.additional_fee}</td>
                </tr>
                <tr>
                    <td>Foreign transaction fees</td>
                    <td>{info.foreign_tx ? '2.5%' : "0"}</td>
                </tr>
                </table>
            </div>
        )

    }

    render() {
        const { src, info, size } = this.props;
        const imgWidth = size === 'small' ? '215' : '430';
        const imgHeight = size === 'small' ? '145' : '270';

        return (
            <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
                <img style={{ "border-radius": "5%" }} src={src} width={imgWidth} height={imgHeight} />
                {this.renderMainInfo(info)}
                <div>
                    <h5>Rewards</h5>
                    {this.renderCategory(info.rewards)}
                </div>

            </div>)
    }
}

CreditCardHolder.propTypes = {
};