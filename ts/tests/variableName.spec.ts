import {variableName} from "../src/variableName";

describe(variableName.name, () => {
    it('Test 1', () => {
        const response = variableName("var_1__Int");
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = variableName("qq-q");
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const response = variableName("2w2");
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const response = variableName(" variable");
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const response = variableName("va[riable0");
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const response = variableName("variable0");
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const response = variableName("_AreYouMad");
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const response = variableName("_Int12");
        expect(response).toBe(true);
    });
    it('Test 9', () => {
        const response = variableName("GoodKing");
        expect(response).toBe(true);
    });
    it('Test 10', () => {
        const response = variableName("!true");
        expect(response).toBe(false);
    });
});
