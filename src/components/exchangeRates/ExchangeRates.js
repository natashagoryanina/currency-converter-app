import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setEUR, setUSD } from '../../redux/currency/currencyActions';
import { getEURExchangeRate, getUSDExchangeRate } from '../../services/API';

const ExchangeRates = ({eur, usd, setEUR, setUSD}) => {
    useEffect(() => {
        getEURExchangeRate('UAH').then(eur => setEUR(eur));
        getUSDExchangeRate('UAH').then(usd => setUSD(usd));
    }, [setEUR, setUSD]);

    return (
        <div>
            <h2>Exchange Rates</h2>
            <table>
                <tr>
                    <th>КУРС ДO ГРИВНІ</th>
                    <th>Середній курс</th>
                </tr>
                <tr>
                    <th>USD</th>
                    <td>{usd}</td>
                </tr>
                <tr>
                    <th>EUR</th>
                    <td>{eur}</td>
                </tr>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    eur: state.currency.eur,
    usd: state.currency.usd,
});

export default connect(mapStateToProps, {setEUR, setUSD})(ExchangeRates);