import { commonCharacterCount } from '../src/commonCharacterCount';

describe(commonCharacterCount.name, () => {
    it('Test 1', () => {
       
        const s1 = 'aabcc';
        const s2 = 'adcaa';

   
        const response = commonCharacterCount(s1, s2);


        expect(response).toBe(3);
    });
});
