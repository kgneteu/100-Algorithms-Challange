import {timedReading} from '../src/timedReading';

describe(timedReading.name, () => {
    it('Test 1', () => {
        const response = timedReading(4, "The Fox asked the stork, 'How is the soup?'");
        expect(response).toBe(7);
    });
    it('Test 2', () => {
        const response = timedReading(1, "...");
        expect(response).toBe(0);
    });
    it('Test 3', () => {
        const response = timedReading(3, "This play was good for us.");
        expect(response).toBe(3);
    });
    it('Test 4', () => {
        const response = timedReading(3, "Suddenly he stopped, and glanced up at the houses");
        expect(response).toBe(5);
    });
    it('Test 5', () => {
        const response = timedReading(6, "Zebras evolved among the Old World horses within the last four million years.");
        expect(response).toBe(11);
    });
    it('Test 6', () => {
        const response = timedReading(5, "Although zebra species may have overlapping ranges, they do not interbreed.");
        expect(response).toBe(6);
    });
    it('Test 7', () => {
        const response = timedReading(1, "Oh!");
        expect(response).toBe(0);
    });
    it('Test 8', () => {
        const response = timedReading(5, "Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain.");
        expect(response).toBe(14);
    });
    it('Test 9', () => {
        const response = timedReading(7, "Her hair clustered round her face like dark leaves round a pale rose.");
        expect(response).toBe(12);
    });
    it('Test 10', () => {
        const response = timedReading(2, "He was always late on principle, his principle being that punctuality is the thief of time.");
        expect(response).toBe(4);
    });
    it('Test 11', () => {
        const response = timedReading(10, "The lad started and drew back");
        expect(response).toBe(6);
    });
    it('Test 12', () => {
        const response = timedReading(6, "The world is wide, and has many marvellous people in it.");
        expect(response).toBe(10);
    });
    it('Test 13', () => {
        const response = timedReading(8, "It was obvious that this was not the man who had destroyed her life.");
        expect(response).toBe(13);
    });
    it('Test 14', () => {
        const response = timedReading(1, "?!?!");
        expect(response).toBe(0);
    });
    it('Test 15', () => {
        const response = timedReading(3, "Haha hehe hoho");
        expect(response).toBe(0);
    });
});
