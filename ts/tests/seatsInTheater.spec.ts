import {seatsInTheater} from '../src/seatsInTheater';

describe(seatsInTheater.name, () => {
    it('Test 1', () => {
        const nCols = 16;
        const nRows = 11;
        const col = 5;
        const row = 3;
        const response = seatsInTheater(nCols, nRows, col, row);
        expect(response).toBe(96);
    });
    it('Test 2', () => {
        const nCols = 1;
        const nRows = 1;
        const col = 1;
        const row = 1;
        const response = seatsInTheater(nCols, nRows, col, row);
        expect(response).toBe(0);
    });
    it('Test 3', () => {
        const nCols = 13;
        const nRows = 6;
        const col = 8;
        const row = 3;
        const response = seatsInTheater(nCols, nRows, col, row);
        expect(response).toBe(18);
    });
    it('Test 4', () => {
        const nCols = 1000;
        const nRows = 1000;
        const col = 1000;
        const row = 1000;
        const response = seatsInTheater(nCols, nRows, col, row);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const nCols = 60;
        const nRows = 100;
        const col = 60;
        const row = 1;
        const response = seatsInTheater(nCols, nRows, col, row);
        expect(response).toBe(99);
    });
});
