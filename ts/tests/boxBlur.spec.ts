import { boxBlur } from '../src/boxBlur';

describe(boxBlur.name, () => {
    it('Test 1', () => {
       
        const data = [[1, 1, 1],
        [1, 7, 1],
        [1, 1, 1]];

   
        const response = boxBlur(data);


        expect(response).toEqual([[1]]);
    });
});
