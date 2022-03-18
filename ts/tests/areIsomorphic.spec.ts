import {areIsomorphic} from '../src/areIsomorphic';

describe(areIsomorphic.name, () => {
    it('Test 1', () => {
        const a1 = [
            [1, 1, 1],
            [0, 0]];
        const a2 = [
            [2, 1, 1],
            [2, 1]];
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const a1 = [
            [2],
            []];
        const a2 = [[2]]
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const a1 = [
            [2],
            [1],
            [3, 5]]
        const a2 = [
            [],
            [1],
            [1, 6]]
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const a1 = [
            [1, 1, 1],
            [0, 0]]
        const a2 = [
            [2, 1, 3],
            [2, 0],
            []]
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const a1 = [
            [],
            [1]]
        const a2 = [
            [],
            [6, 2, 5]]
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const a1: number[][] = []
        const a2: number[][] = []
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const a1 = [
            [2],
            [1],
            [3, 50, 33]]
        const a2 = [
            [],
            [1],
            [1, 6, 32]]
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const a1 = [
            [6],
            [3, 5, 2, 4]]
        const a2 = [
            [34],
            [6, 2, 5]]
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const a1 = [
            [6],
            [3, 5, 2, 4]]
        const a2 = [
            [34],
            [6, 2, 5, 4],
            [1, 2, 3]]
        const response = areIsomorphic(a1, a2);
        expect(response).toBe(false);
    });
});
