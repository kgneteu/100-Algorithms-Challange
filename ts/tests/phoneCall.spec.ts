import {phoneCall} from '../src/phoneCall';

describe(phoneCall.name, () => {
    it('Test 1', () => {
        const response = phoneCall(3,1,2,20);
        expect(response).toBe(14);
    });
    it('Test 2', () => {
        const response = phoneCall(2,2,1,2);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const response = phoneCall(10,1,2,22);
        expect(response).toBe(11);
    });
    it('Test 4', () => {
        const response = phoneCall(2,2,1,24);
        expect(response).toBe(14);
    });
    it('Test 5', () => {
        const response = phoneCall(1,2,1,6);
        expect(response).toBe(3);
    });
    it('Test 6', () => {
        const response = phoneCall(10,10,10,8);
        expect(response).toBe(0);
    });
});
