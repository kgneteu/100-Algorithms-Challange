import {electionsWinners} from '../src/electionWinners';

describe(electionsWinners.name, () => {
    it('Test 1', () => {
        const votes = [2, 3, 5, 2];
        const k = 3;
        const response = electionsWinners(votes, k);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const votes = [5, 1, 3, 4, 1];
        const k = 0;
        const response = electionsWinners(votes, k);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const votes = [1, 3, 3, 1, 1];
        const k = 0;
        const response = electionsWinners(votes, k);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const votes = [1, 1, 1, 1];
        const k = 1;
        const response = electionsWinners(votes, k);
        expect(response).toBe(4);
    });
    it('Test 5', () => {
        const votes = [3, 1, 1, 3, 1];
        const k = 2;
        const response = electionsWinners(votes, k);
        expect(response).toBe(2);
    });
});
