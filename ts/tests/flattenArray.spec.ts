import { flattenArray } from '../src/flattenArray';

describe(flattenArray.name, () => {
    it('Test 1', () => {
       
        const data = [[["a"]], [["b"]]];

   
        const response = flattenArray(data);

 
        expect(response).toEqual(["a", "b"]);
    });

    it('Test 2', () => {
       
        const data = [1, [2], [3, [[4]]]];

   
        const response = flattenArray(data);

 
        expect(response).toEqual([1, 2, 3, 4]);
    });
});
