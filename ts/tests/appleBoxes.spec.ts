import {appleBoxes} from '../src/appleBoxes';

describe(appleBoxes.name, () => {
    it('Test 1', () => {
        const response = appleBoxes(5);
        expect(response).toBe(-15);
    });
    it('Test 2', () => {
        const response = appleBoxes(15);
        expect(response).toBe(-120);
    });
    it('Test 3', () => {
        const response = appleBoxes(36);
        expect(response).toBe(666);
    });
    it('Test 4', () => {
        const response = appleBoxes(1);
        expect(response).toBe(-1);
    });
    it('Test 5', () => {
        const response = appleBoxes(14);
        expect(response).toBe(105);
    });
    it('Test 6', () => {
        const response = appleBoxes(12);
        expect(response).toBe(78);
    });
    it('Test 7', () => {
        const response = appleBoxes(9);
        expect(response).toBe(-45);
    });
    it('Test 8', () => {
        const response = appleBoxes(40);
        expect(response).toBe(820);
    });
    it('Test 9', () => {
        const response = appleBoxes(37);
        expect(response).toBe(-703);
    });
});
