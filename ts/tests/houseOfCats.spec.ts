import { houseOfCats } from '../src/houseOfCats';

describe(houseOfCats.name, () => {
    it('Test 1', () => {
       
        const legs = 6;

   
        const response = houseOfCats(legs);

 
        expect(response).toEqual([1, 3]);
    });

    it('Test 2', () => {
       
        const legs = 2;

   
        const response = houseOfCats(legs);

 
        expect(response).toEqual([1]);
    });
});
