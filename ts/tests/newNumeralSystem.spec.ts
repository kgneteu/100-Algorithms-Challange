import {newNumeralSystem} from '../src/newNumeralSystem';

describe(newNumeralSystem.name, () => {
    it('Test 1', () => {
        const number = 'G';
        const response = newNumeralSystem(number);
        expect(response).toEqual(["A + G", "B + F", "C + E", "D + D"]);
    });
    it('Test 2', () => {
        const number = 'B';
        const response = newNumeralSystem(number);
        expect(response).toEqual(["A + B"]);
    });
    it('Test 3', () => {
        const number = 'A';
        const response = newNumeralSystem(number);
        expect(response).toEqual(["A + A"]);
    });
    it('Test 4', () => {
        const number = 'D';
        const response = newNumeralSystem(number);
        expect(response).toEqual(["A + D", "B + C"]);
    });
    it('Test 5', () => {
        const number = 'W';
        const response = newNumeralSystem(number);
        expect(response).toEqual([
            "A + W",
            "B + V",
            "C + U",
            "D + T",
            "E + S",
            "F + R",
            "G + Q",
            "H + P",
            "I + O",
            "J + N",
            "K + M",
            "L + L"]);
    });
    it('Test 6', () => {
        const number = 'F';
        const response = newNumeralSystem(number);
        expect(response).toEqual(["A + F", "B + E", "C + D"]);
    });
    it('Test 7', () => {
        const number = 'I';
        const response = newNumeralSystem(number);
        expect(response).toEqual(["A + I", "B + H", "C + G", "D + F", "E + E"]);
    });
    it('Test 8', () => {
        const number = 'P';
        const response = newNumeralSystem(number);
        expect(response).toEqual(["A + P", "B + O", "C + N", "D + M", "E + L", "F + K", "G + J", "H + I"]);
    });
});
