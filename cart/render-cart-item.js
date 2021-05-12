import fruits from '../products/fruits.js';
import { cartItems } from '../cart-items.js';
import { findById } from '../utils.js';

export function renderCartItem(cartItem) {
    const fruitCart = findById(fruits, cartItem.id);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    nameTd.textContent = fruitCart.name;
    quantityTd.textContent = cartItem.quantity;
    priceTd.textContent = fruitCart.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const total = fruitCart.price * cartItem.quantity;

    totalTd.textContent = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    tr.append(nameTd, quantityTd, priceTd, totalTd);

    return tr;
};

export function getCartTotal() {
    let accumulator = 0;

    for (let item of cartItems) {
        const fruitCartTotal= findById(fruits, item.id);

        const total = item.quantity * fruitCartTotal.price;

        accumulator = accumulator + total;
    }

    return accumulator;
};