import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setEUR, setUSD } from '../../redux/currency/currencyActions';
import { getEURExchangeRate, getUSDExchangeRate } from '../../services/API';
import { ExchangeRatesContainer } from './ExchangeRatesStyled';

const ExchangeRates = ({eur, usd, setEUR, setUSD}) => {
    useEffect(() => {
        getEURExchangeRate('UAH').then(eur => setEUR(eur.toFixed(2)));
        getUSDExchangeRate('UAH').then(usd => setUSD(usd.toFixed(2)));
    }, [setEUR, setUSD]);

    return (
        <ExchangeRatesContainer>
            <table className='exchange-rates-table'>
                <thead>
                    <tr>
                        <th>Exchange rate to hryvnia</th>
                        <th>Average exchange rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>USD</th>
                        <td>{usd}</td>
                    </tr>
                    <tr>
                        <th>EUR</th>
                        <td>{eur}</td>
                    </tr>
                </tbody>
            </table>
        </ExchangeRatesContainer>
    );
};

const mapStateToProps = (state) => ({
    eur: state.currency.eur,
    usd: state.currency.usd,
});

export default connect(mapStateToProps, {setEUR, setUSD})(ExchangeRates);