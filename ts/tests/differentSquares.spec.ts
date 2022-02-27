import {differentSquares} from '../src/differentSquares';

describe(differentSquares.name, () => {
    it('Test 1', () => {
        const data = [
            [1, 2, 1],
            [2, 2, 2],
            [2, 2, 2],
            [1, 2, 3],
            [2, 2, 1]];
        const response = differentSquares(data);
        expect(response).toBe(6);
    });
    it('Test 2', () => {
        const data = [
            [9,9,9,9,9],
            [9,9,9,9,9],
            [9,9,9,9,9],
            [9,9,9,9,9],
            [9,9,9,9,9],
            [9,9,9,9,9]];
        const response = differentSquares(data);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const data =[[3]];
        const response = differentSquares(data);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const data = [[3,4,5,6,7,8,9]];
        const response = differentSquares(data);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const data =[[3],
            [4],
            [5],
            [6],
            [7]];
        const response = differentSquares(data);
        expect(response).toBe(0);
    });
    it('Test 6', () => {
        const data =[
            [2,5,3,4,3,1,3,2],
            [4,5,4,1,2,4,1,3],
            [1,1,2,1,4,1,1,5],
            [1,3,4,2,3,4,2,4],
            [1,5,5,2,1,3,1,1],
            [1,2,3,3,5,1,2,4],
            [3,1,4,4,4,1,5,5],
            [5,1,3,3,1,5,3,5],
            [5,4,4,3,5,4,4,4]];
        const response = differentSquares(data);
        expect(response).toBe(54);
    });
});
