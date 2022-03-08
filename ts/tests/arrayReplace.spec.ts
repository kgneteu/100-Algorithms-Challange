import {arrayReplace} from '../src/arrayReplace';

describe(arrayReplace.name, () => {
    it('Test 1', () => {
        const data = [3, 5, 2, 4, 5];
        const elementToReplace = 5;
        const substitutionElement = 8;
        const response = arrayReplace(data, elementToReplace, substitutionElement);
        expect(response).toEqual([3, 8, 2, 4, 8]);
    });
    it('Test 2', () => {
        const data = [1, 2, 1];
        const elementToReplace = 1;
        const substitutionElement = 3;
        const response = arrayReplace(data, elementToReplace, substitutionElement);
        expect(response).toEqual([3, 2, 3]);
    });
    it('Test 3', () => {
        const data = [1, 2, 3, 4, 5];
        const elementToReplace = 3;
        const substitutionElement = 0;
        const response = arrayReplace(data, elementToReplace, substitutionElement);
        expect(response).toEqual([1, 2, 0, 4, 5]);
    });
    it('Test 4', () => {
        const data = [1, 1, 1];
        const elementToReplace = 1;
        const substitutionElement = 10;
        const response = arrayReplace(data, elementToReplace, substitutionElement);
        expect(response).toEqual([10, 10, 10]);
    });
    it('Test 5', () => {
        const data = [1, 2, 1, 2, 1];
        const elementToReplace = 2;
        const substitutionElement = 1;
        const response = arrayReplace(data, elementToReplace, substitutionElement);
        expect(response).toEqual([1, 1, 1, 1, 1]);
    });
    it('Test 6', () => {
        const data = [1, 2, 1, 2, 1];
        const elementToReplace = 2;
        const substitutionElement = 2;
        const response = arrayReplace(data, elementToReplace, substitutionElement);
        expect(response).toEqual([1, 2, 1, 2, 1]);
    });
    it('Test 7', () => {
        const data = [3, 1];
        const elementToReplace = 2;
        const substitutionElement = 1;
        const response = arrayReplace(data, elementToReplace, substitutionElement);
        expect(response).toEqual([3, 1]);
    });
});
