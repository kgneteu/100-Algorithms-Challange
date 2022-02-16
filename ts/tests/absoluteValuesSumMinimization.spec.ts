import { absoluteValuesSumMinimization } from '../src/absoluteValuesSumMinimization';

describe(absoluteValuesSumMinimization.name, () => {
    it('Test 1', () => {

        const data = [2, 4, 7];


        const response = absoluteValuesSumMinimization(data);


        expect(response).toBe(4);
    });

    it('Test 2', () => {

        const data = [2, 4, 7, 6];


        const response = absoluteValuesSumMinimization(data);


        expect(response).toBe(4);
    });

    it('Test 3', () => {

        const data = [2, 4, 7, 6, 6];


        const response = absoluteValuesSumMinimization(data);


        expect(response).toBe(7);
    });

    it('Test 4', () => {

        const data = [2, 4, 7, 6, 6, 8];


        const response = absoluteValuesSumMinimization(data);


        expect(response).toBe(7);
    });
});
