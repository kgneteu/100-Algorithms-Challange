import {isPower} from '../src/isPower';

describe(isPower.name, () => {
    it('Test 1', () => {
        const response = isPower(125);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = isPower(72);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const response = isPower(100);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const response = isPower(11);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const response = isPower(324);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const response = isPower(256);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const response = isPower(119);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const response = isPower(400);
        expect(response).toBe(true);
    });
    it('Test 9', () => {
        const response = isPower(350);
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const response = isPower(361);
        expect(response).toBe(true);
    });
});
