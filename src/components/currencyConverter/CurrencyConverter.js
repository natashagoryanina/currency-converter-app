import React, { useEffect, useState } from 'react';
import { getUAHExchangeRate } from '../../services/API';

const CurrencyConverter = () => {
    const [amountFirst, setAmountFirst] = useState();
    const [amountSecond, setAmountSecond] = useState();
    const [currencyFirst, setCurrencyFirst] = useState('UAH');
    const [currencySecond, setCurrencySecond] = useState('USD');
    const [rates, setRates] = useState([]);

    useEffect(() => {
        getUAHExchangeRate().then(response => setRates(response));
    },[]);

    useEffect(() => {
        setAmountFirst(1);
        const moneyAmount = 1 * rates[currencyFirst] / rates[currencySecond];
        setAmountSecond(roundNumber(moneyAmount));
    }, [rates]);
    
    const roundNumber = (num) => {
        return num.toFixed(2);
    };

    const amountChange = (e) => {
        const {value, name} = e.target;

        if (name === 'amountFirst') {
            const moneyAmount = Number(value) * rates[currencySecond] / rates[currencyFirst];
            setAmountSecond(roundNumber(moneyAmount));
            setAmountFirst(value);
        };
        

        if (name === 'amountSecond') {
            const moneyAmount = Number(value) * rates[currencyFirst] / rates[currencySecond];
            setAmountFirst(roundNumber(moneyAmount));
            setAmountSecond(value);
        };
    };

    const currencyChange = (e) => {
        const {value, name} = e.target;
        
        if (name === 'currencySelectFirst') {
            setCurrencyFirst(value);
            const moneyAmount = Number(amountFirst) * rates[currencySecond] / rates[value];
            setAmountSecond(roundNumber(moneyAmount));
        };

        if (name === 'currencySelectSecond') {
            setCurrencySecond(value);
            const moneyAmount = Number(amountSecond) * rates[currencyFirst] / rates[value];
            setAmountFirst(roundNumber(moneyAmount));
        };
    };

    return (
       <div>
           <form>
               <div>
                   <label>
                       Amount
                       <input
                            type="text" 
                            name="amountFirst"
                            value={amountFirst}
                            onChange={amountChange}
                       />
                       <select 
                            name="currencySelectFirst"
                            value={currencyFirst}
                            onChange={currencyChange}
                        >
                            {Object.keys(rates).map(item => 
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            )}
                       </select>
                   </label>
                   <label>
                       Converted to
                       <input
                            type="text" 
                            name="amountSecond"
                            value={amountSecond}
                            onChange={amountChange} 
                       />
                       <select
                            name="currencySelectSecond"
                            value={currencySecond}
                            onChange={currencyChange}
                       >
                           {Object.keys(rates).map(item => 
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            )}
                       </select>
                   </label>
               </div>
           </form>
       </div>
    );
};

export default CurrencyConverter;