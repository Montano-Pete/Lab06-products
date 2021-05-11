// IMPORT MODULES under test here:
import { renderFruits } from '../products/render-fruits.js';

const test = QUnit.test;

test('renders cherry fruit', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cherry = {
        id: 'cherry',
        name: 'Rainier Cherry',
        image: 'rainier-cherry.webp',
        description: 'Sweet with a thin skin and thick creamy-yellow flesh!',
        category: 'tree-fruit',
        price: 1,
        cost: 0.25
    };
    
    const expected = '<li class="tree-fruit box" title="Sweet with a thin skin and thick creamy-yellow flesh!"><h3>Rainier Cherry</h3><img src="../assets/rainier-cherry.webp" alt="Rainier Cherry image" class="all-images"><p class="price">$1.00<button value="Add" class="button">Add</button></p></li>'
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderFruits(cherry);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});
