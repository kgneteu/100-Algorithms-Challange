import {scriptsCrossover} from '../src/scriptsCrossover';

describe(scriptsCrossover.name, () => {
    it('Test 1', () => {
        const arr = ["abc", "aaa", "aba", "bab"]
        const result = "bbb"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const arr = ["aacccc", "bbcccc"]
        const result = "abdddd"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(0);
    })
    it('Test 3', () => {
        const arr = ["a", "b", "c", "d", "e"]
        const result = "c"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(4);
    })
    it('Test 4', () => {
        const arr = ["aa", "ab", "ba"]
        const result = "bb"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(1);
    })
    it('Test 5', () => {
        const arr = ["a", "b", "c", "d", "e"]
        const result = "f"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(0);
    })
    it('Test 6', () => {
        const arr = ["aaa", "aaa"]
        const result = "aaa"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(1);
    })
    it('Test 7', () => {
        const arr = ["cbb", "aba", "aba", "bab"]
        const result = "abb"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(4);
    })
    it('Test 8', () => {
        const arr = ["aazzyx", "bbddyd"]
        const result = "abdddd"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(0);
    })
    it('Test 9', () => {
        const arr = ["x", "y", "z", "t", "p", "q"]
        const result = "p"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(5);
    })
    it('Test 10', () => {
        const arr = ["aaa", "bbb", "aba", "aba"]
        const result = "aba"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(6);
    })
    it('Test 11', () => {
        const arr = ["bbb", "bbb", "bbb"]
        const result = "bbb"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(3);
    })
    it('Test 12', () => {
        const arr = ["dfe", "std", "ceg"]
        const result = "dte"
        const response = scriptsCrossover(arr, result);
        expect(response).toBe(1);
    })
});

