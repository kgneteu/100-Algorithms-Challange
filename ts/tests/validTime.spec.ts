import { validTime } from '../src/validTime';

describe(validTime.name, () => {
    it('Test 1', () => {
       
        const time = '13:58';

   
        const response = validTime(time);

 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
       
        const time = '25:51';

   
        const response = validTime(time);

 
        expect(response).toBe(false);
    });

    it('Test 3', () => {
       
        const time = '02:76';

   
        const response = validTime(time);

 
        expect(response).toBe(false);
    });
});
