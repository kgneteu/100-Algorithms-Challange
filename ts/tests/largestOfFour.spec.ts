import { largestOfFour } from '../src/largestOfFour';

describe(largestOfFour.name, () => {
    it('Test 1', () => {
       
        const data = [
            [4, 5, 1, 3],
            [13, 27, 18, 26],
            [32, 35, 37, 39],
            [1000, 1001, 857, 1]
        ];

   
        const response = largestOfFour(data);

 
        expect(response).toEqual([5, 27, 39, 1001]);
    });

    it('Test 2', () => {
       
        const data = [
            [4, 9, 1, 3],
            [13, 35, 18, 26],
            [32, 35, 97, 39],
            [1000000, 1001, 857, 1]
        ];

   
        const response = largestOfFour(data);

 
        expect(response).toEqual([9, 35, 97, 1000000]);
    });
});
