import {cipher26} from '../src/cipher26';

describe(cipher26.name, () => {
    it('Test 1', () => {
        const data = "taiaiaertkixquxjnfxxdh";
        const response = cipher26(data);
        expect(response).toBe("thisisencryptedmessage");
    });
    it('Test 2', () => {
        const data = "ibttlprimfymqlpgeftwu";
        const response = cipher26(data);
        expect(response).toBe("itsasecrettoeverybody");
    });
    it('Test 3', () => {
        const data = "ftnexvoky";
        const response = cipher26(data);
        expect(response).toBe("fourtytwo");
    });
    it('Test 4', () => {
        const data = "taevzhzmashvjw";
        const response = cipher26(data);
        expect(response).toBe("thereisnospoon");
    });
    it('Test 5', () => {
        const data = "abdgkpvcktdoanbqgxpicxtqon";
        const response = cipher26(data);
        expect(response).toBe("abcdefghijklmnopqrstuvwxyz");
    });
    it('Test 6', () => {
        const data = "z";
        const response = cipher26(data);
        expect(response).toBe("z");
    });
});
