import { chunkyMonkey } from '../src/chunkyMonkey';

describe(chunkyMonkey.name, () => {
    it('Test 1', () => {
        const data = ['a', 'b', 'c', 'd'];
        const length = 2;
        const response = chunkyMonkey(data, length);
        expect(response).toEqual([["a", "b"], ["c", "d"]]);
    });

    it('Test 2', () => {
        const data = [0, 1, 2, 3, 4, 5];
        const length = 4;
        const response = chunkyMonkey(data, length);
        expect(response).toEqual([[0, 1, 2, 3], [4, 5]]);
    });
});
