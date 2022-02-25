import {lineEncoding} from "../src/lineEncoding";

describe(lineEncoding.name, () => {
    it('Test 1', () => {
        const data = 'aabbbc';
        const response = lineEncoding(data);
        expect(response).toBe('2a3bc');
    });
    it('Test 2', () => {
        const data = 'abbcabb';
        const response = lineEncoding(data);
        expect(response).toBe('a2bca2b');
    });
    it('Test 3', () => {
        const data = 'a';
        const response = lineEncoding(data);
        expect(response).toBe('a');
    });
    it('Test 4', () => {
        const data = 'abcd';
        const response = lineEncoding(data);
        expect(response).toBe('abcd');
    });
    it('Test 5', () => {
        const data = 'aaaa';
        const response = lineEncoding(data);
        expect(response).toBe('4a');
    });
    it('Test 6', () => {
        const data = 'wwwwwwwawwwwwww';
        const response = lineEncoding(data);
        expect(response).toBe('7wa7w');
    });
    it('Test 7', () => {
        const data = 'qwertyuioplkjhg';
        const response = lineEncoding(data);
        expect(response).toBe('qwertyuioplkjhg');
    });
    it('Test 8', () => {
        const data = 'bbjaadlkjdl';
        const response = lineEncoding(data);
        expect(response).toBe('2bj2adlkjdl');
    });
});
