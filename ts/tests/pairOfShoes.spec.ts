import {pairOfShoes} from '../src/pairOfShoes';

describe(pairOfShoes.name, () => {
    it('Test 1', () => {
        const data = [
            [0,21],
            [1,23],
            [1,21],
            [0,23]]
        const response = pairOfShoes(data);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const data = [
            [0,21],
            [1,23],
            [1,21],
            [1,23]]
        const response = pairOfShoes(data);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const data = [
            [0,23],
            [1,21],
            [1,23],
            [0,21],
            [1,22],
            [0,22]]
        const response = pairOfShoes(data);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const data = [
            [0,23],
            [1,21],
            [1,23],
            [0,21]]
        const response = pairOfShoes(data);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const data = [
            [1,41],
            [1,40],
            [1,45],
            [0,42],
            [0,42],
            [0,42]]
        const response = pairOfShoes(data);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const data = [
            [1,2],
            [0,2],
            [1,1],
            [0,1],
            [1,2],
            [0,1]]
        const response = pairOfShoes(data);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const data = [
            [0,100],
            [1,1],
            [1,100],
            [0,1]]
        const response = pairOfShoes(data);
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const data = [
            [0,23]]
        const response = pairOfShoes(data);
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const data = [
            [0,23],
            [1,23]]
        const response = pairOfShoes(data);
        expect(response).toBe(true);
    });
    it('Test 10', () => {
        const data = [
            [0,23],
            [1,22]]
        const response = pairOfShoes(data);
        expect(response).toBe(false);
    });
});
