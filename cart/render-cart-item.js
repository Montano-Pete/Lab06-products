import fruits from '../products/fruits.js';
// import { getCart } from '../local-storage.js';
import { findById } from '../utils.js';

// const cartItems = getCart();
// console.log(cartItems);
export function renderCartItem(cartItems) {
    const fruitCart = findById(fruits, cartItems.id);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');
// console.log(fruitCart);
    nameTd.textContent = fruitCart.name;
    quantityTd.textContent = cartItems.quantity;
    priceTd.textContent = fruitCart.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const total = fruitCart.price * cartItems.quantity;

    totalTd.textContent = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    tr.append(nameTd, quantityTd, priceTd, totalTd);

    return tr;
};

export function getCartTotal(cartItemTotals) {
    let accumulator = 0;

    for (let item of cartItemTotals) {
        const fruitCartTotal= findById(fruits, item.id);

        const total = item.quantity * fruitCartTotal.price;

        accumulator = accumulator + total;
    }

    return accumulator;
};