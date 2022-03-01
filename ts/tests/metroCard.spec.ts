import {metroCard} from '../src/metroCard';

describe(metroCard.name, () => {
    it('Test 1', () => {
        const data = 30;
        const response = metroCard(data);
        expect(response).toEqual([31]);
    });
    it('Test 2', () => {
        const data = 31;
        const response = metroCard(data);
        expect(response).toEqual([28, 30, 31]);
    });
    it('Test 3', () => {
        const data = 28;
        const response = metroCard(data);
        expect(response).toEqual([31]);
    });
});
