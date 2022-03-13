import {bishopAndPawn} from '../src/bishopAndPawn';

describe(bishopAndPawn.name, () => {
    it('Test 1', () => {
        const position1 = 'a1';
        const position2 = 'c3';
        const response = bishopAndPawn(position1, position2);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const position1 = 'f2';
        const position2 = 'c5';
        const response = bishopAndPawn(position1, position2);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const position1 = 'a5';
        const position2 = 'c7';
        const response = bishopAndPawn(position1, position2);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const position1 = 'g1';
        const position2 = 'f3';
        const response = bishopAndPawn(position1, position2);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const position1 = 'e7';
        const position2 = 'd6';
        const response = bishopAndPawn(position1, position2);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const position1 = 'e7';
        const position2 = 'a3';
        const response = bishopAndPawn(position1, position2);
        expect(response).toBe(true);
    });
});
