import {knapsackLight} from "../src/knapsackLight";

describe(knapsackLight.name, () => {
    it('Test 1', () => {
        const response = knapsackLight(10, 5, 6, 4, 8);
        expect(response).toBe(10);
    });
    it('Test 2', () => {
        const response = knapsackLight(10, 5, 6, 4, 9);
        expect(response).toBe(16);
    });
    it('Test 3', () => {
        const response = knapsackLight(5, 3, 7, 4, 6);
        expect(response).toBe(7);
    });
    it('Test 4', () => {
        const response = knapsackLight(15, 2, 20, 3, 2);
        expect(response).toBe(15);
    });
});
