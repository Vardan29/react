import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clearBag} from 'store/action-creators';
import BagProduct from 'components/bag-product';
import {bagSelector} from 'store/selectors/shop';

const Bag = () => {
    const bag = useSelector(bagSelector);
    const dispatch = useDispatch();

    if (!bag.length) {
        return <h2>Bag is empty</h2>
    }

    const calculateSummaryPrice = () => {
        return bag.reduce((accumulator, item) => (accumulator + (item.price * item.amount)), 0);
    }

    return (
        <div className={'bag'}>
            {
                bag.map((product) => (
                    <BagProduct
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.imgName}
                        price={product.price}
                        amount={product.amount}
                    />
                ))
            }
            <hr/>
            <button
                onClick={() => dispatch(clearBag())}
            >
                Delete all
            </button>
            <button
                onClick={() => {
                        alert(`Success ${calculateSummaryPrice()}`)
                    }
                }
            >
                Check out
            </button>
        </div>
    )
}

export default Bag;