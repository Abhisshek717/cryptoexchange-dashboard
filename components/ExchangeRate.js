import React from 'react';
import './ExchangeRate.css'

const ExchangeRate = ({exchangeRate,chosenSecondaryCurrency}) => {
  return (
  <div className='exchange__rate'>
    <div className='heading__container'> 
        <h3 className='heading2'>EXCHANGE RATE</h3>
        <div className='heading__group'>
          <h1 className='heading1'>{exchangeRate}</h1>
          <h3 className='heading3'> {chosenSecondaryCurrency} </h3>
        </div>
    </div>
    
  </div>
  )
};

export default ExchangeRate;
