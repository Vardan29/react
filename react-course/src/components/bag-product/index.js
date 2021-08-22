import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeFromBag} from 'store/action-creators';

const BagProduct = ({id, title, description, image, price, amount}) => {
    const dispatch = useDispatch();

    const onRemoveFromBag = () => {
            dispatch(removeFromBag(id));
    }

    return (
        <div className={'product'}>
            <img src={require(`assets/images/${image}`).default} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                <span>{price * amount}</span>
                <span>
                    {amount}
                </span>
            </p>
            <button
                onClick={onRemoveFromBag}
            >
                Remove
            </button>
        </div>
    )
}

export default BagProduct;