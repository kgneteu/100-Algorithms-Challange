import { arrayReplace } from '../src/arrayReplace';

describe(arrayReplace.name, () => {
    it('Test 1', () => {
       
        const data = [3, 5, 2, 4, 5];
        const elementToReplace = 1;
        const substitutionElement = 3;

   
        const response = arrayReplace(data, elementToReplace, substitutionElement);


        expect(response).toEqual([3, 2, 3]);
    });
});
