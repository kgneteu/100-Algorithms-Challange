import {digitsProduct} from '../src/digitsProduct';

describe(digitsProduct.name, () => {
    it('Test 1', () => {
        const data = "";
        const response = digitsProduct(data);
        expect(response).toBe("");
    });
});
