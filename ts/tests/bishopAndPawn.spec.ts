import { bishopAndPawn } from '../src/bishopAndPawn';

describe(bishopAndPawn.name, () => {
    it('Test 1', () => {
       
        const position1 = 'a1';
        const position2 = 'c3';

   
        const response = bishopAndPawn(position1, position2);


        expect(response).toBe(true);
    });
});
