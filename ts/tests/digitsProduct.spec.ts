import {digitsProduct} from '../src/digitsProduct';

describe(digitsProduct.name, () => {
    it('Test 1', () => {
        const response = digitsProduct(12);
        expect(response).toBe(26);
    });
    it('Test 2', () => {
        const response = digitsProduct(19);
        expect(response).toBe(-1);
    });
    it('Test 3', () => {
        const response = digitsProduct(450);
        expect(response).toBe(2559);
    });
    it('Test 4', () => {
        const response = digitsProduct(0);
        expect(response).toBe(10);
    });
    it('Test 5', () => {
        const response = digitsProduct(13);
        expect(response).toBe(-1);
    });
    it('Test 6', () => {
        const response = digitsProduct(1);
        expect(response).toBe(1);
    });
    it('Test 7', () => {
        const response = digitsProduct(243);
        expect(response).toBe(399);
    });
    it('Test 8', () => {
        const response = digitsProduct(576);
        expect(response).toBe(889);
    });
    it('Test 9', () => {
        const response = digitsProduct(360);
        expect(response).toBe(589);
    });
    it('Test 10', () => {
        const response = digitsProduct(7);
        expect(response).toBe(7);
    });
    it('Test 11', () => {
        const response = digitsProduct(112);
        expect(response).toBe(278);
    });
    it('Test 12', () => {
        const response = digitsProduct(20);
        expect(response).toBe(45);
    });
    it('Test 13', () => {
        const response = digitsProduct(10);
        expect(response).toBe(25);
    });
    it('Test 14', () => {
        const response = digitsProduct(600);
        expect(response).toBe(3558);
    });
    it('Test 15', () => {
        const response = digitsProduct(33);
        expect(response).toBe(-1);
    });
    it('Test 16', () => {
        const response = digitsProduct(512);
        expect(response).toBe(888);
    });
    it('Test 17', () => {
        const response = digitsProduct(486);
        expect(response).toBe(699);
    });
    it('Test 18', () => {
        const response = digitsProduct(484);
        expect(response).toBe(-1);
    });
    it('Test 19', () => {
        const response = digitsProduct(581);
        expect(response).toBe(-1);
    });
});
