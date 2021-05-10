import fruits from '../products/fruits.js';
import { renderFruits } from './render-fruits.js';

const ul = document.querySelector('#fruit');

for (const fruit of fruits) {
    const el = renderFruits(fruit);
    ul.appendChild(el);
}