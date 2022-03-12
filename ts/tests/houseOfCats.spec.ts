import {houseOfCats} from '../src/houseOfCats';

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
    it('Test 3', () => {
        const legs = 12;
        const response = houseOfCats(legs);
        expect(response).toEqual([0, 2, 4, 6]);
    });
    it('Test 4', () => {
        const legs = 4;
        const response = houseOfCats(legs);
        expect(response).toEqual([0, 2]);
    });

    it('Test 5', () => {
        const legs = 40;
        const response = houseOfCats(legs);
        expect(response).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });
    it('Test 6', () => {
        const legs = 1;
        const response = houseOfCats(legs);
        expect(response).toEqual([0]);
    });
});
