import {chessKnight} from "../src/chessKnight";

describe(chessKnight.name, () => {
    it('Test 1', () => {
        const mac = "a1";
        const response = chessKnight(mac);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const mac = "c2";
        const response = chessKnight(mac);
        expect(response).toBe(6);
    });
    it('Test 3', () => {
        const mac = "d4";
        const response = chessKnight(mac);
        expect(response).toBe(8);
    });
    it('Test 4', () => {
        const mac = "g6";
        const response = chessKnight(mac);
        expect(response).toBe(6);
    });
    it('Test 5', () => {
        const mac = "a3";
        const response = chessKnight(mac);
        expect(response).toBe(4);
    });
    it('Test 6', () => {
        const mac = "h8";
        const response = chessKnight(mac);
        expect(response).toBe(2);
    });
    it('Test 7', () => {
        const mac = "a8";
        const response = chessKnight(mac);
        expect(response).toBe(2);
    });
    it('Test 8', () => {
        const mac = "h1";
        const response = chessKnight(mac);
        expect(response).toBe(2);
    });
});
