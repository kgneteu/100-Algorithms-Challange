import {isCryptSolution} from '../src/isCryptSolution';

describe(isCryptSolution.name, () => {
    it('Test 1', () => {
        const data = ["SEND", "MORE", "MONEY"];
        const solution = [
            ["O", "0"],
            ["M", "1"],
            ["Y", "2"],
            ["E", "5"],
            ["N", "6"],
            ["D", "7"],
            ["R", "8"],
            ["S", "9"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const data = ["TEN", "TWO", "ONE"]
        const solution = [
            ["O", "1"],
            ["T", "0"],
            ["W", "9"],
            ["E", "5"],
            ["N", "4"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const data = ["ONE", "ONE", "TWO"]
        const solution = [
            ["O", "2"],
            ["T", "4"],
            ["W", "6"],
            ["E", "1"],
            ["N", "3"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const data = ["ONE", "ONE", "TWO"]
        const solution = [
            ["O", "0"],
            ["T", "1"],
            ["W", "2"],
            ["E", "5"],
            ["N", "6"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const data = ["A", "A", "A"]
        const solution = [
            ["A", "0"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const data = ["A", "B", "C"]
        const solution = [
            ["A", "5"],
            ["B", "6"],
            ["C", "1"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const data = ["AA", "AA", "AA"]
        const solution = [
            ["A", "0"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const data = ["A", "A", "A"]
        const solution = [
            ["A", "1"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const data = ["AA", "AA", "BB"]
        const solution = [
            ["A", "1"],
            ["B", "2"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(true);
    });
    it('Test 10', () => {
        const data = ["BAA", "CAB", "DAB"]
        const solution = [
            ["A", "0"],
            ["B", "1"],
            ["C", "2"],
            ["D", "4"]]
        const response = isCryptSolution(data, solution);
        expect(response).toBe(false);
    });
});
