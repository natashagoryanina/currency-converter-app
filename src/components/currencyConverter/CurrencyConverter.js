import React, { useEffect, useState } from 'react';
import { getUAHExchangeRate } from '../../services/API';

const CurrencyConverter = () => {
    const [amountFirst, setAmountFirst] = useState();
    const [amountSecond, setAmountSecond] = useState();
    const [currencyFirst, setCurrencyFirst] = useState('USD');
    const [currencySecond, setCurrencySecond] = useState('USD');
    const [rates, setRates] = useState([]);

    useEffect(() => {
        getUAHExchangeRate().then(response => setRates(response));
    },[]);
   

    const amountChange = (e) => {
        const {value, name, type} = e.target;
        console.log("value", value);
        console.log("name", name);

        if (name == 'amountFirst') {
        
            const moneyAmount = Number(value) * 35;
            console.log(moneyAmount);
            setAmountSecond(moneyAmount);
        }
        

        if (name == 'amountSecond') {
            setAmountSecond(value);
        }
    };

    const currencyChange = (e) => {
        const {value, name, type} = e.target;
        console.log("value", value);
        console.log("name", name);

    };



    return (
       <div>
           <form>
               <div>
                   <label>
                       Amount
                       <input
                            type="number" 
                            name="amountFirst"
                            value={amountFirst}
                            onChange={amountChange}
                       />
                       <select 
                            name='currencySelectFirst'
                            value={currencyFirst}
                            onChange={currencyChange}
                        >
                           <option value='USD'>USD</option>
                           <option value='EUR'>EUR</option>
                           <option value='UAH'>UAH</option>
                       </select>
                   </label>
                   <label>
                       Converted to
                       <input
                            type="number" 
                            name="amountSecond"
                            value={amountSecond}
                            onChange={amountChange} 
                       />
                       <select
                            name='currencySelectSecond'
                            value={currencySecond}
                            onChange={currencyChange}
                       >
                           <option value='USD'>USD</option>
                           <option value='EUR'>EUR </option>
                           <option value='UAH'>UAH</option>
                       </select>
                   </label>
               </div>
           </form>
       </div>
    );
};

export default CurrencyConverter;