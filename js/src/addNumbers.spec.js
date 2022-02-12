//Write a function that returns the sum of two numbers.
//Write a function that returns the sum of all numbers regardless of # of params.
import { add,add2 } from './addNumbers.js';
describe(add.name, () => {
    it('test 1', () => {
        // act
        const result = add(1, 2);

        // assert
        expect(result).toBe(3);
    });

    it('test 2', () => {
        // act
        const result = add(3, 2);

        // assert
        expect(result).toBe(5);
    });
});

describe(add2.name, () => {
    // console.log(add2(2,3));
    it('test 1', () => {
        // arrange
        const data = [1, 2, 3, 4, 5];

        // act
        const result = add2(...data);

        // assert
        expect(result).toBe(15);
    });

    it('test 2', () => {
        // arrange
        const data = [2, 3];

        // act
        const result = add2(...data);

        // assert
        expect(result).toBe(5);
    });
});
