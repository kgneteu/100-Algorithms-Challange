import {rectangleRotation} from '../src/rectangleRotation';

describe(rectangleRotation.name, () => {
    it('Test 1', () => {
        const response = rectangleRotation(6, 4);
        expect(response).toBe(23);
    });
    it('Test 2', () => {
        const response = rectangleRotation(30, 2);
        expect(response).toBe(65);
    });
    it('Test 3', () => {
        const response = rectangleRotation(8, 6);
        expect(response).toBe(49);
    });
    it('Test 4', () => {
        const response = rectangleRotation(16, 20);
        expect(response).toBe(333);
    });
    it('Test 5', () => {
        const response = rectangleRotation(20, 32);
        expect(response).toBe(653);
    });
    it('Test 6', () => {
        const response = rectangleRotation(30, 26);
        expect(response).toBe(795);
    });
    it('Test 7', () => {
        const response = rectangleRotation(50, 4);
        expect(response).toBe(177);
    });
    it('Test 8', () => {
        const response = rectangleRotation(2, 2);
        expect(response).toBe(5);
    });
    it('Test 9', () => {
        const response = rectangleRotation(50, 50);
        expect(response).toBe(2521);
    });
    it('Test 10', () => {
        const response = rectangleRotation(38, 42);
        expect(response).toBe(1563);
    });
});
