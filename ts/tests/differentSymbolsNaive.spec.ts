import { differentSymbolsNaive } from '../src/differentSymbolsNaive';

describe(differentSymbolsNaive.name, () => {
    it('Test 1', () => {
       
        const s = 'cabca';

   
        const response = differentSymbolsNaive(s);

 
        expect(response).toBe(3);
    });
});
