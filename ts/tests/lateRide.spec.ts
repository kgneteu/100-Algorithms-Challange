import { lateRide } from '../src/lateRide';

describe(lateRide.name, () => {
    it('Test 1', () => {
       
        const data = 240;

   
        const response = lateRide(data);

 
        expect(response).toBe(4);
    });

    it('Test 2', () => {
       
        const data = 808;

   
        const response = lateRide(data);

 
        expect(response).toBe(14);
    });
});
