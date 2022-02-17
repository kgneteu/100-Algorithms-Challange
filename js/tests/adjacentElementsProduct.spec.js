import { adjacentElementsProduct } from '../src/adjacentElementsProduct.js';

describe(adjacentElementsProduct.name, () => {
    it('Test 1', () => {
        const data = [3, 6, -2, -5, 7, 3];
        const response = adjacentElementsProduct(data);
        expect(response).toBe(21);
    });
});
