import { tasksTypes } from '../src/tasksType';

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
});
