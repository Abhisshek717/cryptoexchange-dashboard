import React from 'react';
import {useState} from 'react';
import ExchangeRate from './ExchangeRate';
import axios from 'axios';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
   
    const currencies = ['BTC','ETH','USD','XRP','LTC','ADA']

    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');

    const [amount,setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [result, setResult] = useState(0);


    const convert = () => {


        const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
        headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': '31f64af2fdmsh0efa7a13119006bp13f01ajsn0a6be6fce7f7',
        }
        };

        axios.request(options).then( (response) => {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setResult(amount * response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
        }).catch( (error) => {
            console.error(error)
        });

    }


  return( 

    <div className='currency__converter'>
       
        <div className='input__box'>

                <h2 className='heading'>CURRENCY CONVERTER</h2>
        
                <div className='main__container'>
                        
                    {/* primary currency */}
                        <div className='primary__container'>
                            <p>Primary Currency</p>
                                
                            <div className='wrapped__container'> 
                                <input type="number" name="currency-amount-1" value={amount} onChange={(e) => setAmount(e.target.value)}/>

                                <select value={chosenPrimaryCurrency} name="currency-option-1" className='currency__options' onChange={(e) => setChosenPrimaryCurrency(e.target.value) }>
                                    {currencies.map((currency, _index) => <option key={_index}>{currency}</option> )}
                                </select>
                            </div>                
                            
                        </div>

                    {/* secondary currency */}
                        <div className='primary__container'>
                            <p>Secondary Currency:</p>
                                
                            <div className='wrapped__container'> 
                                <input type="number" name="currency-amount-2" value={result}  disabled={true}/>

                                <select value={chosenSecondaryCurrency} name="currency-option-2" className='currency__options' onChange={(e) => setChosenSecondaryCurrency(e.target.value)} >
                                    {currencies.map((currency, _index) => <option key={_index}>{currency}</option> )}
                                </select>
                            </div>                
                            
                        </div>
                    
                </div>
            

            <button id="convert__button" onClick={convert}>convert</button>

        </div>
         
        <ExchangeRate exchangeRate = {exchangeRate} chosenSecondaryCurrency={chosenSecondaryCurrency}/>
    </div>
  
  )
};

export default CurrencyConverter;
