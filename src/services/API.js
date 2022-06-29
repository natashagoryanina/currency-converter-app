import axios from "axios";

//! EUR
const eurOptions = {
    method: 'GET',
    url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
    params: {base: 'EUR'},
    headers: {
        'X-RapidAPI-Key': '0cf9e79df1msh080e287a6e80370p1865bfjsn39af9ab38218',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
};

export const getEURExchangeRate = async (currency) => {
    try {
        const response = await axios.request(eurOptions);
        return response.data.rates[currency];
    } catch (error) {
        console.error(error);
    }
};

//! USD
const usdOptions = {
    method: 'GET',
    url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
    params: {base: 'USD'},
    headers: {
      'X-RapidAPI-Key': '0cf9e79df1msh080e287a6e80370p1865bfjsn39af9ab38218',
      'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
};

export const getUSDExchangeRate = async (currency) => {
    try {
        const response = await axios.request(usdOptions);
        return response.data.rates[currency];
    } catch (error) {
        console.error(error);
    }
};

//! UAH
const uahOptions = {
    method: 'GET',
    url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
    params: {base: 'UAH'},
    headers: {
      'X-RapidAPI-Key': '0cf9e79df1msh080e287a6e80370p1865bfjsn39af9ab38218',
      'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
};

export const getUAHExchangeRate = async () => {
    try {
        const response = await axios.request(uahOptions);
        return response.data.rates;
    } catch (error) {
        console.error(error);
    }
};

