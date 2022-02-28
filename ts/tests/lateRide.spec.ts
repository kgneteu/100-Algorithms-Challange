import {lateRide} from '../src/lateRide';

describe(lateRide.name, () => {
    it('Test 1', () => {
        const data = 240;
        const response = lateRide(data);
        expect(response).toBe(4);
    });
    it('Test 2', () => {
        const data = 808;
        const response = lateRide(data);
        expect(response).toBe(14);
    });
    it('Test 3', () => {
        const data = 1439;
        const response = lateRide(data);
        expect(response).toBe(19);
    });
    it('Test 4', () => {
        const data = 0;
        const response = lateRide(data);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const data = 8;
        const response = lateRide(data);
        expect(response).toBe(8);
    });
});
