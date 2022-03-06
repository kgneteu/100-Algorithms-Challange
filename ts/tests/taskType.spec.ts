import {tasksTypes} from '../src/tasksType';

describe(tasksTypes.name, () => {
    it('Test 1', () => {
        const deadlines = [1, 2, 3, 4, 5];
        const day = 2;
        const response = tasksTypes(deadlines, day);
        expect(response).toEqual([2, 3, 0]);
    });
    it('Test 2', () => {
        const deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8];
        const day = 1;
        const response = tasksTypes(deadlines, day);
        expect(response).toEqual([2, 8, 2]);
    });
    it('Test 3', () => {
        const deadlines = [1];
        const day = 1;
        const response = tasksTypes(deadlines, day);
        expect(response).toEqual([1, 0, 0]);
    });
    it('Test 4', () => {
        const deadlines = [8];
        const day = 1;
        const response = tasksTypes(deadlines, day);
        expect(response).toEqual([0, 1, 0]);
    });
    it('Test 5', () => {
        const deadlines = [4, 14, 16];
        const day = 7;
        const response = tasksTypes(deadlines, day);
        expect(response).toEqual([1, 1, 1]);
    });
});
