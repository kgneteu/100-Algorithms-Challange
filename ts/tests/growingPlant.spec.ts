import { growingPlant } from '../src/growingPlant';

describe(growingPlant.name, () => {
    it('Test 1', () => {
        const upSpeed = 100;
        const downSpeed = 10;
        const desiredHeight = 910;
        const response = growingPlant(upSpeed, downSpeed, desiredHeight);
        expect(response).toBe(10);
    });

});
