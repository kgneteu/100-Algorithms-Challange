import { sortByHeight } from '../src/sortByHeight';

describe(sortByHeight.name, () => {
    it('Test 1', () => {
       
        const data = [-1, 150, 190, 170, -1, -1, 160, 180];

   
        const response = sortByHeight(data);

 
        expect(response).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
    });
});
