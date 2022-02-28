import {addTwoDigits} from '../src/addTwoDigits';

describe(addTwoDigits.name, () => {
    it('Test 1', () => {
        const data = 39;
        const response = addTwoDigits(data);
        expect(response).toBe(12);
    });
    it('Test 2', () => {
        const data = 48;
        const response = addTwoDigits(data);
        expect(response).toBe(12);
    });
    it('Test 3', () => {
        const data = 10;
        const response = addTwoDigits(data);
        expect(response).toBe(1);
    });
    it('Test 4', () => {
        const data = 52;
        const response = addTwoDigits(data);
        expect(response).toBe(7);
    });
    it('Test 5', () => {
        const data = 55;
        const response = addTwoDigits(data);
        expect(response).toBe(10);
    });
});
