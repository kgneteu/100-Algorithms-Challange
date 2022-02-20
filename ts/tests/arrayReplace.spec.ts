import {arrayReplace} from '../src/arrayReplace';

describe(arrayReplace.name, () => {
    it('Test 1', () => {
        const data = [3, 5, 2, 4, 5];
        const elementToReplace = 5;
        const substitutionElement = 8;
        const response = arrayReplace(data, elementToReplace, substitutionElement);
        expect(response).toEqual([3, 8, 2, 4, 8]);
    });
});
