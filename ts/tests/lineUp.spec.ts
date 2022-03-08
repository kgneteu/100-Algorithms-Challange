import {lineUp} from '../src/lineUp';

describe(lineUp.name, () => {
    it('Test 1', () => {
        const data = "LLARL";
        const response = lineUp(data);
        expect(response).toBe(3);
    });
    it('Test 2', () => {
        const data = "RLR";
        const response = lineUp(data);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const data = "";
        const response = lineUp(data);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const data = "L";
        const response = lineUp(data);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const data = "A";
        const response = lineUp(data);
        expect(response).toBe(1);
    });
    it('Test 6', () => {
        const data = "AAAAAAAAAAAAAAA";
        const response = lineUp(data);
        expect(response).toBe(15);
    });
    it('Test 7', () => {
        const data = "RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL";
        const response = lineUp(data);
        expect(response).toBe(16);
    });
    it('Test 8', () => {
        const data = "AALAAALARAR";
        const response = lineUp(data);
        expect(response).toBe(5);
    });

});
