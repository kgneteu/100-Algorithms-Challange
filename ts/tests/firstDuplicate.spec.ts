import { firstDuplicate } from '../src/firstDuplicate';

describe(firstDuplicate.name, () => {
    it('Test 1', () => {
       
        const data = [2, 1, 3, 5, 3, 2];

   
        const response = firstDuplicate(data);

 
        expect(response).toBe(3);
    });

    it('Test 2', () => {
       
        const data = [2, 4, 3, 5, 1];

   
        const response = firstDuplicate(data);

 
        expect(response).toBe(-1);
    });
});
