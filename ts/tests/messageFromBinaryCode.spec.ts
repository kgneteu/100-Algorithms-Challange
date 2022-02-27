import {messageFromBinaryCode} from '../src/messageFromBinaryCode';

describe(messageFromBinaryCode.name, () => {
    it('Test 1', () => {
        const data = "010010000110010101101100011011000110111100100001";
        const response = messageFromBinaryCode(data);
        expect(response).toBe("Hello!");
    });
    it('Test 2', () => {
        const data = "0101100101101111011101010010000001101000011000010110" +
            "0100001000000110110101100101001000000110000101110100001000000" +
            "1100000011010000110010101101100011011000110111100101110";
        const response = messageFromBinaryCode(data);
        expect(response).toBe("You had me at `hello.");
    });
    it('Test 3', () => {
        const data = "010000110110100001100001011011100110011101100101001000" +
            "000111010001101000011001010010000001110111011011110111001001101" +
            "100011001000010000001100010011110010010000001100010011001010110" +
            "100101101110011001110010000001111001011011110111010101110010011" +
            "1001101100101011011000110011000101110";
        const response = messageFromBinaryCode(data);
        expect(response).toBe("Change the world by being yourself.");
    });
    it('Test 4', () => {
        const data = "010001010110110001100101011011010110010101101110011101000" +
            "110000101110010011110010010110000100000011011010111100100100000011" +
            "001000110010101100001011100100010000001010111011000010111010001110" +
            "011011011110110111000100001";
        const response = messageFromBinaryCode(data);
        expect(response).toBe("Elementary, my dear Watson!");
    });
});
