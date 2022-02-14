import { depositProfit } from '../src/depositProfit';

describe(depositProfit.name, () => {
    it('Test 1', () => {
       
        const deposit = 100;
        const rate = 20;
        const threshold = 170;

   
        const response = depositProfit(deposit, rate, threshold);

 
        expect(response).toBe(3);
    });
});
