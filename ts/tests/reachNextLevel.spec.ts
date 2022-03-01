import {reachNextLevel} from '../src/reachNextLevel';

describe(reachNextLevel.name, () => {
    it('Test 1', () => {
        const response = reachNextLevel(10, 15, 5);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = reachNextLevel(10, 15, 4);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const response = reachNextLevel(3, 6, 4);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const response = reachNextLevel(84, 135, 36);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const response = reachNextLevel(74, 170, 58);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const response = reachNextLevel(16, 23, 16);
        expect(response).toBe(true);
    });
});
