import {switchLights} from '../src/switchLights';

describe(switchLights.name, () => {
    it('Test 1', () => {
        const data = [1, 1, 1, 1, 1];
        const response = switchLights(data);
        expect(response).toEqual([0, 1, 0, 1, 0]);
    });

    it('Test 2', () => {
        const data = [0, 0];
        const response = switchLights(data);
        expect(response).toEqual([0, 0]);
    });

    it('Test 3', () => {
        const data = [1, 0, 0, 1, 0, 1, 0, 1];
        const response = switchLights(data);
        expect(response).toEqual([1, 1, 1, 0, 0, 1, 1, 0]);
    });

    it('Test 4', () => {
        const data = [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1];
        const response = switchLights(data);
        expect(response).toEqual([1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0]);
    });

    it('Test 5', () => {
        const data = [1, 1, 0, 0, 1];
        const response = switchLights(data);
        expect(response).toEqual([0, 1, 1, 1, 0]);
    });

    it('Test 2', () => {
        const data =  [1, 1, 1, 0, 1, 1, 1];
        const response = switchLights(data);
        expect(response).toEqual([1, 0, 1, 1, 0, 1, 0]);
    });
});
