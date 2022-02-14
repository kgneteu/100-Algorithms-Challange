import { chessBoardCellColor } from '../src/chessBoardCellColor';

describe(chessBoardCellColor.name, () => {
    it('Test 1', () => {
       
        const cell1 = 'A1';
        const cell2 = 'C3';

   
        const response = chessBoardCellColor(cell1, cell2);


        expect(response).toBe(true);
    });

    it('Test 2', () => {
       
        const cell1 = 'A1';
        const cell2 = 'H3';

   
        const response = chessBoardCellColor(cell1, cell2);


        expect(response).toBe(false);
    });
});
