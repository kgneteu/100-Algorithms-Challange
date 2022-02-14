import { containsCloseNums } from '../src/containsCloseNums';

describe(containsCloseNums.name, () => {
    it('Test 1', () => {
       
        const nums = [0, 1, 2, 3, 5, 2];
        const k = 3;

   
        const response = containsCloseNums(nums, k);

 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
       
        const nums = [0, 1, 2, 3, 5, 2];
        const k = 2;

   
        const response = containsCloseNums(nums, k);

 
        expect(response).toBe(false);
    });
});
