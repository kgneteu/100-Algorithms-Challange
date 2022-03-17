import {decipher} from '../src/decipher';

describe(decipher.name, () => {
    it('Test 1', () => {
        const data = "10197115121";
        const response = decipher(data);
        expect(response).toBe("easy");
    });
    it('Test 2', () => {
        const data = "98";
        const response = decipher(data);
        expect(response).toBe("b");
    });
    it('Test 3', () => {
        const data = "122";
        const response = decipher(data);
        expect(response).toBe("z");
    });
    it('Test 4', () => {
        const data = "1229897";
        const response = decipher(data);
        expect(response).toBe("zba");
    });
    it('Test 5', () => {
        const data = "97989910010110210310410510610710810911011111211311411511611711811912012112297";
        const response = decipher(data);
        expect(response).toBe("abcdefghijklmnopqrstuvwxyza");
    });
    it('Test 6', () => {
        const data = "10297115106108102108971061151041029897107106115981001029710711510010298";
        const response = decipher(data);
        expect(response).toBe("fasjlflajshfbakjsbdfaksdfb");
    });
    it('Test 1', () => {
        const data = "11211111911310110810910097107108115111112119113101106107971101021101061021041149710511411497";
        const response = decipher(data);
        expect(response).toBe("powqelmdaklsopwqejkanfnjfhrairra");
    });
});
