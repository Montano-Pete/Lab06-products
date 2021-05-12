import { cartItems } from '../cart-items.js';
import { renderCartItem, getCartTotal } from './render-cart-item.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const totalPrice = getCartTotal();

total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'curreny',
    currency: 'USD'
});
