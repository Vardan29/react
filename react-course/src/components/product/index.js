import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToBag} from 'store/action-creators';
import ProductAmount from './product-amount';


const Product = ({ index, title, description, image, price, count }) => {
    const [amount, changeAmount] = useState(0)
    const dispatch = useDispatch();
    const onAddToBag = () => {
        if (amount > 0) {
            dispatch(addToBag({index, amount}));
        }
    }
    return (
        <div className={'product'}>
            <img src={require(`assets/images/${image}`).default} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                <span>{price}</span>
                <ProductAmount
                    count={count}
                    amount={amount}
                    changeAmountHandler={changeAmount}
                />
            </p>
            <button
                onClick={onAddToBag}
            >
                Add to bag
            </button>
        </div>
    )
}

export default Product;