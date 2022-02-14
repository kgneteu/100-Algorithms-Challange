import { pigLatin } from '../src/pigLatin';

describe(pigLatin.name, () => {
    it('Test 1', () => {
       
        const data = 'glove';

   
        const response = pigLatin(data);

 
        expect(response).toBe('oveglay');
    });

    it('Test 2', () => {
       
        const data = 'eight';

   
        const response = pigLatin(data);

 
        expect(response).toBe('eightway');
    });
});
