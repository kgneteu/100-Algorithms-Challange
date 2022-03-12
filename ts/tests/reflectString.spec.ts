import {reflectString} from '../src/reflectString';

describe(reflectString.name, () => {
    it('Test 1', () => {
        const inputString = 'name';
        const response = reflectString(inputString);
        expect(response).toBe('mznv');
    });
    it('Test 2', () => {
        const inputString = 'abyz';
        const response = reflectString(inputString);
        expect(response).toBe('zyba');
    });
    it('Test 3', () => {
        const inputString = 'nnnnn';
        const response = reflectString(inputString);
        expect(response).toBe('mmmmm');
    });
    it('Test 4', () => {
        const inputString = 'pqr';
        const response = reflectString(inputString);
        expect(response).toBe('kji');
    });
    it('Test 5', () => {
        const inputString = 'codesignal';
        const response = reflectString(inputString);
        expect(response).toBe('xlwvhrtmzo');
    });
});
