import {fancyRide} from '../src/fancyRide';

describe(fancyRide.name, () => {
    it('Test 1', () => {
        const l = 30;
        const fares = [0.3, 0.5, 0.7, 1, 1.3];
        const response = fancyRide(l, fares);
        expect(response).toBe('UberXL');
    });
    it('Test 2', () => {
        const l = 15;
        const fares = [0.3, 0.5, 0.7, 1, 1.3];
        const response = fancyRide(l, fares);
        expect(response).toBe('UberSUV');
    });
    it('Test 3', () => {
        const l = 15;
        const fares = [0.3, 0.4, 0.5, 0.5, 0.7];
        const response = fancyRide(l, fares);
        expect(response).toBe('UberSUV');
    });
    it('Test 4', () => {
        const l = 15;
        const fares = [0.7, 1, 1.3, 1.5, 1.7];
        const response = fancyRide(l, fares);
        expect(response).toBe('UberPlus');
    });
    it('Test 5', () => {
        const l = 20;
        const fares = [0.3, 0.5, 0.7, 1, 1.3];
        const response = fancyRide(l, fares);
        expect(response).toBe('UberBlack');
    });
});
