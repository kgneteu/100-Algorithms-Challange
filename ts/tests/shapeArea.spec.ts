import {shapeArea} from '../src/shapeArea';

describe(shapeArea.name, () => {
    it('Test 1', () => {
        const n = 1;
        const response = shapeArea(n);
        expect(response).toBe(1);
    });

    it('Test 2', () => {
        const n = 2;
        const response = shapeArea(n);
        expect(response).toBe(5);
    });

    it('Test 3', () => {
        const n = 3;
        const response = shapeArea(n);
        expect(response).toBe(13);
    });

    it('Test 4', () => {
        const n = 4;
        const response = shapeArea(n);
        expect(response).toBe(25);
    });

    it('Test 5', () => {
        const n = 6;
        const response = shapeArea(n);
        expect(response).toBe(61);
    });
});
