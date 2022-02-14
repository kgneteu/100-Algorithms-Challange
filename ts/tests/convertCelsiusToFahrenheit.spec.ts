import { celsiusToFahrenheit } from '../src/convertCelsiusToFahrenheit';

describe(celsiusToFahrenheit.name, () => {
    it('Test 1', () => {
       
        const data = -30;

   
        const response = celsiusToFahrenheit(data);

 
        expect(response).toBe(-22);
    });

    it('Test 2', () => {
       
        const data = -10;

   
        const response = celsiusToFahrenheit(data);

 
        expect(response).toBe(14);
    });

    it('Test 3', () => {
       
        const data = 0;

   
        const response = celsiusToFahrenheit(data);

 
        expect(response).toBe(32);
    });
});
