import store from '../../store';
import API from '../../core/api';
import {setProducts} from '../../store/action-creators';

export function getProducts() {
  API.getAction(
    'products',
    (products) => {
      store.dispatch(setProducts(products));
    },
    (err) => {
      console.log(err);
    }
  );
}

export function createProduct(product) {
  API.postAction(
    'products',
    product,
    (product) => {
      getProducts();
    },
    (err) => {
      console.log(err);
    }
  );
}

export function deleteProduct(id) {
  API.deleteAction(
    `products/${id}`,
    (product) => {
      getProducts();
    },
    (err) => {
      console.log(err);
    }
  );
}