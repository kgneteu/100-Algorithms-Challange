import { ratingThreshold } from '../src/ratingThreshold';

describe(ratingThreshold.name, () => {
    it('Test 1', () => {
       
        const threshHold = 3.5;
        const ratings = [
            [3, 4],
            [3, 3, 3, 4],
            [4]
        ];

   
        const response = ratingThreshold(threshHold, ratings);

 
        expect(response).toEqual([1]);
    });
});
