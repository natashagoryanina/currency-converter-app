import React from 'react';
import { Route, Routes } from 'react-router';
import CurrencyConverterPage from '../../pages/CurrencyConverterPage';
import ExchangeRatesPage from '../../pages/ExchangeRatesPage';

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<ExchangeRatesPage/>} exact/>
                <Route path='/currency-converter' element={<CurrencyConverterPage/>}/>
                <Route path='*' element={<ExchangeRatesPage/>}/>
            </Routes>
        </main>
    );
};

export default Main;