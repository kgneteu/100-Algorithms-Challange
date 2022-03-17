import {numbersGrouping} from '../src/numbersGrouping';

describe(numbersGrouping.name, () => {
    it('Test 1', () => {
        const data = [20000, 239, 10001, 999999, 10000, 20566, 29999]
        const response = numbersGrouping(data);
        expect(response).toBe(11);
    });
    it('Test 2', () => {
        const data = [10000, 20000, 30000, 40000, 50000, 60000, 10000, 120000, 150000, 200000, 300000, 1000000, 10000000, 100000000, 10000000]
        const response = numbersGrouping(data);
        expect(response).toBe(28);
    });
    it('Test 3', () => {
        const data = [10000]
        const response = numbersGrouping(data);
        expect(response).toBe(2);
    });
    it('Test 4', () => {
        const data = [10000, 1]
        const response = numbersGrouping(data);
        expect(response).toBe(3);
    });
    it('Test 5', () => {
        const data = [685400881, 696804468, 696804942, 803902442, 976412678, 976414920, 47763597, 803900633, 233144924, 47764349, 233149077, 214990733, 214994039, 280528089, 280524347, 685401797]
        const response = numbersGrouping(data);
        expect(response).toBe(24);
    });
    it('Test 6', () => {
        const data = [1000000000, 999990000, 999980000, 999970000, 999960000, 999950000, 999940000, 999930000, 999920000, 999910000]
        const response = numbersGrouping(data);
        expect(response).toBe(20);
    });
    it('Test 7', () => {
        const data = [598589004, 92986320, 520103781, 808743817, 635098665, 95244159, 808747008, 867017063, 635092226, 867013865, 92989995, 520100093, 95245838, 84897101, 598583113, 84893918]
        const response = numbersGrouping(data);
        expect(response).toBe(24);
    });
    it('Test 8', () => {
        const data = [102382103, 21039898, 39823, 433, 30928398, 40283209, 23234, 342534, 98473483, 498398424, 9384984, 9839239]
        const response = numbersGrouping(data);
        expect(response).toBe(24);
    });
});
