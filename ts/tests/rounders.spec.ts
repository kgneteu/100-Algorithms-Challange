import {rounders} from '../src/rounders';

describe(rounders.name, () => {
    it('Test 1', () => {
        const response = rounders(15);
        expect(response).toBe(20);
    });
    it('Test 2', () => {
        const response = rounders(1234);
        expect(response).toBe(1000);
    });
    it('Test 3', () => {
        const response = rounders(1445);
        expect(response).toBe(2000);
    });
    it('Test 4', () => {
        const response = rounders(14);
        expect(response).toBe(10);
    });
    it('Test 5', () => {
        const response = rounders(10);
        expect(response).toBe(10);
    });
    it('Test 6', () => {
        const response = rounders(7001);
        expect(response).toBe(7000);
    });
    it('Test 7', () => {
        const response = rounders(99);
        expect(response).toBe(100);
    });
});
