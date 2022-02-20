import {makeArrayConsecutive2} from '../src/makeArrayConsecutive2';

describe(makeArrayConsecutive2.name, () => {
    it('Test 1', () => {
        const statues = [6, 2, 3, 8];
        const response = makeArrayConsecutive2(statues);
        expect(response).toBe(3);
    });
});
