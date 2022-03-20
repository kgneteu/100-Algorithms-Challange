import {dayOfWeek} from '../src/dayOfWeek';

describe(dayOfWeek.name, () => {
    it('Test 1', () => {
        const response = dayOfWeek("02-01-2016");
        expect(response).toBe(5);
    });
    it('Test 2', () => {
        const response = dayOfWeek("01-01-1900");
        expect(response).toBe(6);
    });
    it('Test 3', () => {
        const response = dayOfWeek( "02-29-2016");
        expect(response).toBe(28);
    });
    it('Test 4', () => {
        const response = dayOfWeek("01-16-2027");
        expect(response).toBe(11);
    });
    it('Test 5', () => {
        const response = dayOfWeek("10-12-2000");
        expect(response).toBe(6);
    });
    it('Test 6', () => {
        const response = dayOfWeek("02-29-2072");
        expect(response).toBe(40);
    });
});
