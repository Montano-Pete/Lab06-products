export default { renderFruits };
export function renderFruits(fruit) {
    const li = document.createElement('li');
    li.classList.add(fruit.category);
    li.classList.add('box');
    li.title = fruit.description;

    const h3 = document.createElement('h3');
    h3.textContent = fruit.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${fruit.image}`;
    img.alt = `${fruit.name} image`;
    img.classList.add('all-images');
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${fruit.price.toFixed(2)}`;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = 'Add';
    button.classList.add('button');
    p.appendChild(button);

    li.appendChild(p);
    return li;
}