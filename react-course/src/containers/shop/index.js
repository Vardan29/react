import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Product from '../../components/product';
import {getProducts} from '../../core/controllers/shop';
import {productsSelector} from '../../store/selectors/shop';

const Shop = () => {

    const products = useSelector(productsSelector);

    useEffect(() => {
        getProducts();
    }, []);

    if (!products) {
        return <h2>Loading...</h2>
    }

    return (
        <div className={'shop'}>
            {
                products.map((product, index) => (
                    <Product
                        index={index}
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.imgName}
                        price={product.price}
                        count={product.count}
                    />
                ))
            }
        </div>
    )
}

export default Shop;