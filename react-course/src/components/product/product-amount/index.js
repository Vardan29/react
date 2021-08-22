import React from 'react';

const ProductAmount = ({count, amount, changeAmountHandler}) => {
    const optionsCount = [];
    for (let i = 0; i <= count; i++){
        optionsCount.push(i);
    }
    return (
        <select
            name={'product-amount'}
            id={'product-amount'}
            value={amount}
            onChange={({ target: { value } }) => changeAmountHandler(+value)}
        >
            {
                optionsCount.map((idx) => (
                   <option key={idx} value={idx}>
                       {idx}
                   </option>
                ))
            }
        </select>
    )
}

export default ProductAmount;