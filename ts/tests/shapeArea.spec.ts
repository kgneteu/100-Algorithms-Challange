import {shapeArea} from '../src/shapeArea';

describe(shapeArea.name, () => {
    it('Test 1', () => {
        const n = 2;
        const response = shapeArea(n);
        expect(response).toBe(5);
    });

    it('Test 2', () => {
        const n = 3;
        const response = shapeArea(n);
        expect(response).toBe(13);
    });
});
