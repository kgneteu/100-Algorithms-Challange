import { avoidObstacles } from '../src/avoidObstacles';

describe(avoidObstacles.name, () => {
    it('Test 1', () => {
       
        const data = [5, 3, 6, 7, 9];


   
        const response = avoidObstacles(data);


        expect(response).toBe(4);
    });
});
