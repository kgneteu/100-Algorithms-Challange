import {validTime} from '../src/validTime';

describe(validTime.name, () => {
    it('Test 1', () => {
        const time = '13:58';
        const response = validTime(time);
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        const time = '25:51';
        const response = validTime(time);
        expect(response).toBe(false);
    });

    it('Test 3', () => {
        const time = '02:76';
        const response = validTime(time);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const time = '24:00';
        const response = validTime(time);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const time = '22:0a';
        const response = validTime(time);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const time = '23:59';
        const response = validTime(time);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const time = '00:00';
        const response = validTime(time);
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const time = '-1:00';
        const response = validTime(time);
        expect(response).toBe(false);
    });
});
