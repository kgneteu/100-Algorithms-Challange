import {videoPart} from '../src/videoPart';

describe(videoPart.name, () => {
    it('Test 1', () => {
        const part = "02:20:00"
        const total = "07:00:00"
        const response = videoPart(part, total);
        expect(response).toEqual([1, 3]);
    });
    it('Test 2', () => {
        const part = "25:26:20"
        const total = "25:26:20"
        const response = videoPart(part, total);
        expect(response).toEqual([1, 1]);
    });
    it('Test 3', () => {
        const part = "00:02:20"
        const total = "00:10:00"
        const response = videoPart(part, total);
        expect(response).toEqual([7, 30]);
    });
    it('Test 4', () => {
        const part = "08:08:08"
        const total = "20:20:20"
        const response = videoPart(part, total);
        expect(response).toEqual([2, 5]);
    });
    it('Test 5', () => {
        const part = "00:00:07"
        const total = "01:10:00"
        const response = videoPart(part, total);
        expect(response).toEqual([1, 600]);
    });
    it('Test 6', () => {
        const part = "07:32:29"
        const total = "10:12:51"
        const response = videoPart(part, total);
        expect(response).toEqual([1597, 2163]);
    });
    it('Test 7', () => {
        const part = "01:41:59"
        const total = "02:00:00"
        const response = videoPart(part, total);
        expect(response).toEqual([6119, 7200]);
    });
});
