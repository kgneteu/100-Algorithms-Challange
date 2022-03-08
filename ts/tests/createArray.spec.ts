import {createArray} from '../src/createArray';

describe(createArray.name, () => {
    it('Test 1', () => {
        const data = 1;
        const response = createArray(data);
        expect(response).toEqual([1]);
    });
    it('Test 2', () => {
        const data = 4;
        const response = createArray(data);
        expect(response).toEqual([1,1,1,1]);
    });
    it('Test 3', () => {
        const data = 15;
        const response = createArray(data);
        expect(response).toEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
    });
    it('Test 4', () => {
        const data = 7;
        const response = createArray(data);
        expect(response).toEqual([1,1,1,1,1,1,1]);
    });
});
