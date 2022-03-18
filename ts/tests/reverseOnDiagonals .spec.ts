import {reverseOnDiagonals} from '../src/reverseOnDiagonals';

describe(reverseOnDiagonals.name, () => {
    it('Test 1', () => {
        const data = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]];
        const response = reverseOnDiagonals(data);
        expect(response).toEqual([
            [9, 2, 7],
            [4, 5, 6],
            [3, 8, 1]]);
    });
    it('Test 2', () => {
        const data = [[239]];
        const response = reverseOnDiagonals(data);
        expect(response).toEqual([[239]]);
    });
    it('Test 3', () => {
        const data = [
            [1, 10],
            [100, 1000]];
        const response = reverseOnDiagonals(data);
        expect(response).toEqual([
            [1000, 100],
            [10, 1]]);
    });
    it('Test 4', () => {
        const data = [
            [43, 455, 32, 103],
            [102, 988, 298, 981],
            [309, 21, 53, 64],
            [2, 22, 35, 291]];
        const response = reverseOnDiagonals(data);
        expect(response).toEqual([
            [291, 455, 32, 2],
            [102, 53, 21, 981],
            [309, 298, 988, 64],
            [103, 22, 35, 43]]);
    });
    it('Test 5', () => {
        const data = [
            [34, 1000, 139, 248, 972, 584],
            [98, 1, 398, 128, 762, 654],
            [33, 498, 132, 543, 764, 43],
            [329, 12, 54, 764, 666, 213],
            [928, 109, 489, 71, 837, 332],
            [93, 298, 42, 53, 76, 43]];
        const response = reverseOnDiagonals(data);
        expect(response).toEqual([
            [43, 1000, 139, 248, 972, 93],
            [98, 837, 398, 128, 109, 654],
            [33, 498, 764, 54, 764, 43],
            [329, 12, 543, 132, 666, 213],
            [928, 762, 489, 71, 1, 332],
            [584, 298, 42, 53, 76, 34]]);
    });
    it('Test 6', () => {
        const data = [
            [1, 1],
            [2, 2]];
        const response = reverseOnDiagonals(data);
        expect(response).toEqual([
            [2, 2],
            [1, 1]]);
    });
});
