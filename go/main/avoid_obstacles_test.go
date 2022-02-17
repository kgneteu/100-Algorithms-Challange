import { avoidObstacles } from '../src/avoidObstacles';

describe(avoidObstacles.name, () => {
    it('Test 1', () => {
        const data = [5, 3, 6, 7, 9];
        const response = avoidObstacles(data);
        expect(response).toBe(4);
    });
    it('Test 2', () => {
        const data = [1, 3, 5, 7, 9];
        const response = avoidObstacles(data);
        expect(response).toBe(2);
    });
    it('Test 3', () => {
        const data = [2, 5, 7, 9];
        const response = avoidObstacles(data);
        expect(response).toBe(4);
    });
    it('Test 4', () => {
        const data = [2, 4, 7, 10];
        const response = avoidObstacles(data);
        expect(response).toBe(3);
    });
});
