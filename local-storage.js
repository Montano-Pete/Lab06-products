import { findById } from './utils.js';

export function getCart() {
    const stringyCartGet = localStorage.getItem('CART');

    const parsedCart = JSON.parse(stringyCartGet);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }
};

export function setCart(someCart) {
    const stringyCartSet = JSON.stringify(someCart);

    localStorage.setItem('CART', stringyCartSet);
};

export function addItemToCart(itemId) {
    const cart = getCart();
    const cartItem = findById(cart, itemId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newCartItem = { id: itemId, quantity: 1 };
        cart.push(newCartItem);
    }

    setCart(cart);
}