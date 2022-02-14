import {addTwoDigits} from '../src/addTwoDigits';

describe(addTwoDigits.name, () => {
    it('Test 1', () => {
        const data = 39;
        const response = addTwoDigits(data);
        expect(response).toBe(12);
    });
});
