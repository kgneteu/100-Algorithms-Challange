import {threeSplit} from '../src/threeSplit';

describe(threeSplit.name, () => {
    it('Test 1', () => {
        const data = [0, -1, 0, -1, 0, -1];
        const response = threeSplit(data);
        expect(response).toBe(4);
    });
    it('Test 2', () => {
        const data = [-1, 0, -1, 0, -1, 0];
        const response = threeSplit(data);
        expect(response).toBe(4);
    });
    it('Test 3', () => {
        const data = [-1, 1, -1, 1, -1, 1, -1, 1];
        const response = threeSplit(data);
        expect(response).toBe(3);
    });
    it('Test 4', () => {
        const data = [7, 8, 2, 25, -9, 12, 12];
        const response = threeSplit(data);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const data = [184138, -37745, 82759, 14851, 79647, -91351, -9413, 84612, -101031, -181203, -162841, -14357, -122060, -56837, -59344, 95670, 19230, -197053, -151794, -12451, 1512, 108952, -155189, -8121, 43054, -25951, 125440, 28768, -42373, 188365, 150867, -38140, 61777, 186009, 93565, -76218, -133893, -103795, -187274, -175627, -170204, -30250, 151764, 92036, 9080, 41271, -34582, 75906, -176277, 179547, 152773, 27776, -70639, -186460, 134040, 135416, 196278, 15198, -167083, 190726, 175444, -25970, -37584, 130247, 163481, -78746, 123875, -127859, 63643, 131400, 177022, -51120, -33714, -64067, -153262, -152369, -51938, 173432, -101008, 124992, -151945, -170175, 182191, 144348, -43276, -29398, 143683, 4763, 164814, 195818, 28225, 180864, -127334, 37600, 184790, 4152, 199588, 133654, -18816, -121196];
        const response = threeSplit(data);
        expect(response).toBe(0);
    });
    it('Test 6', () => {
        const data = [0, 0, 0, 0, 0];
        const response = threeSplit(data);
        expect(response).toBe(6);
    });
});
