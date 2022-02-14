import { composeRanges } from '../src/composeRanges';

describe(composeRanges.name, () => {
    it('Test 1', () => {
       
        const data = [-1, 0, 1, 2, 6, 7, 9];

   
        const response = composeRanges(data);

 
        expect(response).toEqual(["-1->2", "6->7", "9"]);
    });
});
