import {starRotation} from '../src/starRotation';

describe(starRotation.name, () => {
    it('Test 1', () => {
        const matrix = [
            [1, 0, 0, 2, 0, 0, 3],
            [0, 1, 0, 2, 0, 3, 0],
            [0, 0, 1, 2, 3, 0, 0],
            [8, 8, 8, 9, 4, 4, 4],
            [0, 0, 7, 6, 5, 0, 0],
            [0, 7, 0, 6, 0, 5, 0],
            [7, 0, 0, 6, 0, 0, 5]]
        const width = 7
        const center = [3, 3]
        const t = 1
        const response = starRotation(matrix, width, center, t);
        expect(response).toEqual([
            [8, 0, 0, 1, 0, 0, 2],
            [0, 8, 0, 1, 0, 2, 0],
            [0, 0, 8, 1, 2, 0, 0],
            [7, 7, 7, 9, 3, 3, 3],
            [0, 0, 6, 5, 4, 0, 0],
            [0, 6, 0, 5, 0, 4, 0],
            [6, 0, 0, 5, 0, 0, 4]]
        )
    });
    it('Test 2', () => {
        const matrix = [
            [1, 0, 0, 2, 0, 0, 3],
            [0, 1, 0, 2, 0, 3, 0],
            [0, 0, 1, 2, 3, 0, 0],
            [8, 8, 8, 9, 4, 4, 4],
            [0, 0, 7, 6, 5, 0, 0]]
        const width = 3
        const center = [1, 5]
        const t = 81
        const response = starRotation(matrix, width, center, t);
        expect(response).toEqual([
            [1, 0, 0, 2, 0, 0, 0],
            [0, 1, 0, 2, 3, 3, 3],
            [0, 0, 1, 2, 0, 0, 0],
            [8, 8, 8, 9, 4, 4, 4],
            [0, 0, 7, 6, 5, 0, 0]]
        )
    });
    it('Test 3', () => {
        const matrix = [
            [1, 0, 0, 2, 0, 0, 3],
            [0, 1, 0, 2, 0, 3, 0],
            [0, 0, 1, 2, 3, 0, 0],
            [8, 8, 8, 9, 4, 4, 4],
            [0, 0, 7, 6, 5, 0, 0],
            [0, 7, 0, 6, 0, 5, 0],
            [7, 0, 0, 6, 0, 0, 5]]
        const width = 3
        const center = [3, 3]
        const t = 15
        const response = starRotation(matrix, width, center, t);
        expect(response).toEqual([
            [1, 0, 0, 2, 0, 0, 3],
            [0, 1, 0, 2, 0, 3, 0],
            [0, 0, 2, 3, 4, 0, 0],
            [8, 8, 1, 9, 5, 4, 4],
            [0, 0, 8, 7, 6, 0, 0],
            [0, 7, 0, 6, 0, 5, 0],
            [7, 0, 0, 6, 0, 0, 5]]
        )
    });
    it('Test 4', () => {
        const matrix = [
            [1, 0, 3],
            [3, 4, 5],
            [8, 99, 0]]
        const width = 3
        const center = [1, 1]
        const t = 4
        const response = starRotation(matrix, width, center, t);
        expect(response).toEqual([
            [0, 99, 8],
            [5, 4, 3],
            [3, 0, 1]]
        )
    });
    it('Test 5', () => {
        const matrix = [
            [8, 16, 32],
            [1, 0, 3],
            [3, 4, 5],
            [8, 99, 0],
            [42, 56, 64]]
        const width = 3
        const center = [2, 1]
        const t = 12
        const response = starRotation(matrix, width, center, t);
        expect(response).toEqual([
            [8, 16, 32],
            [0, 99, 8],
            [5, 4, 3],
            [3, 0, 1],
            [42, 56, 64]]
        )
    });

});
