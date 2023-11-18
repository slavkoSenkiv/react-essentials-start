// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

import React from 'react';

export default function App() {
    let currentPrice = '$100';
    let discountedPrice = '$75';
    const [ price, setNewPrice ] = React.useState(currentPrice);
    
    
    function updatePrice (newPrice) {
        setNewPrice(newPrice);
    }
    
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={()=>updatePrice(discountedPrice)}>Apply Discount</button>
        </div>
    );
}
