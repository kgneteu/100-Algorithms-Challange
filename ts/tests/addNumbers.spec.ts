import {add, add2} from '../src/addNumbers';

describe(add.name, () => {
    it('test 1', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    });

    it('test 2', () => {
        const result = add(3, 2);
        expect(result).toBe(5);
    });
});

describe(add2.name, () => {
    it('test 3', () => {
        const data = [1, 2, 3, 4, 5];
        const result = add2(...data);
        expect(result).toBe(15);
    });

    it('test 4', () => {
        const data = [2, 3];
        const result = add2(...data);
        expect(result).toBe(5);
    });
});
