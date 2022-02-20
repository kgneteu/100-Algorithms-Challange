import {areSimilar} from '../src/areSimilar';

describe(areSimilar.name, () => {
    it('Test 1', () => {
        const data1 = [1, 2, 3];
        const data2 = [1, 2, 3];
        const response = areSimilar(data1, data2);
        expect(response).toEqual(true);
    });

    it('Test 2', () => {
        const data1 = [1, 2, 3];
        const data2 = [2, 1, 3];
        const response = areSimilar(data1, data2);
        expect(response).toEqual(true);
    });

    it('Test 3', () => {
        const data1 = [1, 2, 2];
        const data2 = [2, 1, 1];
        const response = areSimilar(data1, data2);
        expect(response).toEqual(false);
    });
});
