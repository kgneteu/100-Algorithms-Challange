import { addTwoDigits } from './../src/addTwoDigits';

describe(addTwoDigits.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 39;

        // act
        const response = addTwoDigits(data);

        // assert
        expect(response).toBe(12);
    });
});
