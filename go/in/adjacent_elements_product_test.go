// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
//     Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
//
// 7 and 3 produce the largest product.

import { adjacentElementsProduct } from '../src/adjacentElementsProduct.js';

describe(adjacentElementsProduct.name, () => {
    it('Test 1', () => {
        const data = [3, 6, -2, -5, 7, 3];
        const response = adjacentElementsProduct(data);
        expect(response).toBe(21);
    });
});
