import axios from "axios";

const eurOptions = {
    method: 'GET',
    url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
    params: {base: 'EUR'},
    headers: {
        'X-RapidAPI-Key': '0cf9e79df1msh080e287a6e80370p1865bfjsn39af9ab38218',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
};

export const getEURExchangeRate = async () => {
    try {
        const response = await axios.request(eurOptions);
        console.log("eur", response.data.rates.UAH);
        return response.data.rates.UAH;
    } catch (error) {
        console.error(error);
    }
};

const usdOptions = {
    method: 'GET',
    url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
    params: {base: 'USD'},
    headers: {
      'X-RapidAPI-Key': '0cf9e79df1msh080e287a6e80370p1865bfjsn39af9ab38218',
      'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
};

export const getUSDExchangeRate = async () => {
    try {
        const response = await axios.request(usdOptions);
        console.log("usd", response.data.rates.UAH);
        return response.data.rates.UAH;
    } catch (error) {
        console.error(error);
    }
};
