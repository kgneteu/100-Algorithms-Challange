import { seatsInTheater } from '../src/seatsInTheater';

describe(seatsInTheater.name, () => {
    it('Test 1', () => {
       
        const nCols = 16;
        const nRows = 11;
        const col = 5;
        const row = 3;

   
        const response = seatsInTheater(nCols, nRows, col, row);

 
        expect(response).toBe(96);
    });
});
