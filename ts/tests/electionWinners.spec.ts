import {electionsWinners} from '../src/electionWinners';

describe(electionsWinners.name, () => {
    it('Test 1', () => {
        const votes = [2, 3, 5, 2];
        const k = 3;
        const response = electionsWinners(votes, k);
        expect(response).toBe(2);
    });
});
