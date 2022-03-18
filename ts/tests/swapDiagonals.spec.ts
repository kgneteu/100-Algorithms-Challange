import {swapDiagonals} from '../src/swapDiagonals';

describe(swapDiagonals.name, () => {
    it('Test 1', () => {
        const data = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]];
        const response = swapDiagonals(data);
        expect(response).toEqual([
            [3, 2, 1],
            [4, 5, 6],
            [9, 8, 7]]);
    });
    it('Test 2', () => {
        const data = [
            [239]];
        const response = swapDiagonals(data);
        expect(response).toEqual([
            [239]]);
    });
    it('Test 3', () => {
        const data = [
            [1,10],
            [100,1000]];
        const response = swapDiagonals(data);
        expect(response).toEqual([
            [10, 1],
            [1000, 100]]);
    });
    it('Test 4', () => {
        const data = [
            [43, 455, 32, 103],
            [102, 988, 298, 981],
            [309, 21, 53, 64],
            [2, 22, 35, 291]];
        const response = swapDiagonals(data);
        expect(response).toEqual([
            [103, 455, 32, 43],
            [102, 298, 988, 981],
            [309, 53, 21, 64],
            [291, 22, 35, 2]]);
    });
    it('Test 5', () => {
        const data = [
            [34, 1000, 139, 248, 972, 584],
            [98, 1, 398, 128, 762, 654],
            [33, 498, 132, 543, 764, 43],
            [329, 12, 54, 764, 666, 213],
            [928, 109, 489, 71, 837, 332],
            [93, 298, 42, 53, 76, 43]];
        const response = swapDiagonals(data);
        expect(response).toEqual([
            [584, 1000, 139, 248, 972, 34],
            [98, 762, 398, 128, 1, 654],
            [33, 498, 543, 132, 764, 43],
            [329, 12, 764, 54, 666, 213],
            [928, 837, 489, 71, 109, 332],
            [43, 298, 42, 53, 76, 93]]);
    });
    it('Test 6', () => {
        const data = [
            [1, 2],
            [1, 2]];
        const response = swapDiagonals(data);
        expect(response).toEqual([
            [2, 1],
            [2, 1]]);
    });

});
