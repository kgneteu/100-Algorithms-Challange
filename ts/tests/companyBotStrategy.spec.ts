import { companyBotStrategy } from '../src/companyBotStrategy';

describe(companyBotStrategy.name, () => {
    it('Test 1', () => {
        const data = [[3, 1], [6, 1], [4, 1], [5, 1]];
        const response = companyBotStrategy(data);
        expect(response).toBe(4.5);
    });

    it('Test 2', () => {
        const data = [[4, 1], [4, -1], [0, 0], [6, 1]];
        const response = companyBotStrategy(data);
        expect(response).toBe(5.0);
    });

    it('Test 3', () => {
        const data = [[4, -1], [0, 0], [5, -1]];
        const response = companyBotStrategy(data);
        expect(response).toBe(0);
    });
});
