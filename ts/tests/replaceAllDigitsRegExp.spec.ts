import {replaceAllDigitsRegExp} from '../src/replaceAllDigitsRegExp';

describe(replaceAllDigitsRegExp.name, () => {
    it('Test 1', () => {
        const data = "There are 12 points";
        const response = replaceAllDigitsRegExp(data);
        expect(response).toBe("There are ## points");
    });
    it('Test 2', () => {
        const data = "012ss210";
        const response = replaceAllDigitsRegExp(data);
        expect(response).toBe("###ss###");
    });
    it('Test 3', () => {
        const data = " _Aas 23";
        const response = replaceAllDigitsRegExp(data);
        expect(response).toBe(" _Aas ##");
    });
    it('Test 4', () => {
        const data = "no digits here";
        const response = replaceAllDigitsRegExp(data);
        expect(response).toBe("no digits here");
    });
    it('Test 5', () => {
        const data = " aa_0239mehce3d";
        const response = replaceAllDigitsRegExp(data);
        expect(response).toBe(" aa_####mehce#d");
    });
    it('Test 6', () => {
        const data = "v z gv4zyx eu mu ";
        const response = replaceAllDigitsRegExp(data);
        expect(response).toBe("v z gv#zyx eu mu ");
    });
});
