import { getCart } from '../local-storage.js';
import { renderCartItem, getCartTotal } from './render-cart-item.js';

const cartItems = getCart();
const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const totalPrice = getCartTotal(cartItems);

total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});
