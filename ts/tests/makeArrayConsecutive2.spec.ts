import {makeArrayConsecutive2} from '../src/makeArrayConsecutive2';

describe(makeArrayConsecutive2.name, () => {
    it('Test 1', () => {
        const statues = [6, 2, 3, 8];
        const response = makeArrayConsecutive2(statues);
        expect(response).toBe(3);
    });
    it('Test 2', () => {
        const statues = [0, 3];
        const response = makeArrayConsecutive2(statues);
        expect(response).toBe(2);
    });
    it('Test 3', () => {
        const statues = [5, 4, 6];
        const response = makeArrayConsecutive2(statues);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const statues = [6, 3];
        const response = makeArrayConsecutive2(statues);
        expect(response).toBe(2);
    });
    it('Test 5', () => {
        const statues = [1];
        const response = makeArrayConsecutive2(statues);
        expect(response).toBe(0);
    });
});
