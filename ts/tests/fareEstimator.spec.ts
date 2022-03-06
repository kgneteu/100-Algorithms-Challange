import {fareEstimator} from '../src/fareEstimator';

describe(fareEstimator.name, () => {
    it('Test 1', () => {
        const ride_time = 30;
        const ride_distance = 7;
        const cost_per_minute = [0.2, 0.35, 0.4, 0.45];
        const cost_per_mile = [1.1, 1.8, 2.3, 3.5];
        const response = fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile);
        expect(response.map(v=>+v.toFixed(2))).toEqual([13.7, 23.1, 28.1, 38]);
    });
    it('Test 2', () => {
        const ride_time = 15;
        const ride_distance = 9;
        const cost_per_minute = [0.2, 0.34, 0.35, 0.45, 1];
        const cost_per_mile = [1.1, 1.8, 1.9, 1.7, 5];
        const response = fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile);
        expect(response.map(v=>+v.toFixed(2))).toEqual([12.9, 21.3, 22.35, 22.05, 60]);
    });
    it('Test 3', () => {
        const ride_time = 50;
        const ride_distance = 17;
        const cost_per_minute = [0.123, 0.35, 0.78, 1.6, 1.6, 3, 2];
        const cost_per_mile = [1.1, 1.8, 2.4, 1.8, 2.6, 1.5, 2.45];
        const response = fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile);
        expect(response).toEqual([24.85, 48.1, 79.8, 110.6, 124.2, 175.5, 141.65]);
    });
});
