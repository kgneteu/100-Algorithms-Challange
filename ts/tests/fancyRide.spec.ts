import {fancyRide} from '../src/fancyRide';

describe(fancyRide.name, () => {
    it('Test 1', () => {
        const l = 30;
        const fares = [0.3, 0.5, 0.7, 1, 1.3];
        const response = fancyRide(l, fares);
        expect(response).toBe('UberXL');
    });
});
