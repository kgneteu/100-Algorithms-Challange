import {additionWithoutCarrying} from '../src/additionWithoutCarrying';

describe(additionWithoutCarrying.name, () => {
    it('Test 1', () => {
        const response = additionWithoutCarrying(456, 1734);
        expect(response).toBe(1180);
    });
    it('Test 2', () => {
        const response = additionWithoutCarrying(99999, 0);
        expect(response).toBe(99999);
    });
    it('Test 3', () => {
        const response = additionWithoutCarrying(999, 999);
        expect(response).toBe(888);
    });
    it('Test 4', () => {
        const response = additionWithoutCarrying(0, 0);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const response = additionWithoutCarrying(54321, 56789);
        expect(response).toBe(0);
    });
});
