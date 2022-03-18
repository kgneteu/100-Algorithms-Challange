import {volleyballPositions} from '../src/volleyballPositions';

describe(volleyballPositions.name, () => {
    it('Test 1', () => {
        const formation = [
            ["empty", "Player5", "empty"],
            ["Player4", "empty", "Player2"],
            ["empty", "Player3", "empty"],
            ["Player6", "empty", "Player1"]]
        const k = 2
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "Player1", "empty"],
            ["Player2", "empty", "Player3"],
            ["empty", "Player4", "empty"],
            ["Player5", "empty", "Player6"]]
        );
    });
    it('Test 2', () => {
        const formation = [
            ["empty", "Alice", "empty"],
            ["Bob", "empty", "Charlie"],
            ["empty", "Dave", "empty"],
            ["Eve", "empty", "Frank"]]
        const k = 6
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "Alice", "empty"],
            ["Bob", "empty", "Charlie"],
            ["empty", "Dave", "empty"],
            ["Eve", "empty", "Frank"]]
        );
    });
    it('Test 3', () => {
        const formation = [
            ["empty", "player 3", "empty"],
            ["player 3", "empty", "player"],
            ["empty", "4", "empty"],
            ["5", "empty", "42"]]
        const k = 1000000
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "5", "empty"],
            ["4", "empty", "player 3"],
            ["empty", "player", "empty"],
            ["42", "empty", "player 3"]]
        );
    });
    it('Test 4', () => {
        const formation = [
            ["empty", "player 3", "empty"],
            ["player 8", "empty", "player"],
            ["empty", "4", "empty"],
            ["5", "empty", "42"]]
        const k = 0
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "player 3", "empty"],
            ["player 8", "empty", "player"],
            ["empty", "4", "empty"],
            ["5", "empty", "42"]]
        );
    });
    it('Test 5', () => {
        const formation = [
            ["empty", "player 3", "empty"],
            ["player 8", "empty", "player"],
            ["empty", "4", "empty"],
            ["5", "empty", "42"]]
        const k = 1000000000
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "5", "empty"],
            ["4", "empty", "player 8"],
            ["empty", "player", "empty"],
            ["42", "empty", "player 3"]]
        );
    });
    it('Test 6', () => {
        const formation = [
            ["empty", "Alice", "empty"],
            ["Bob", "empty", "Charlie"],
            ["empty", "Dave", "empty"],
            ["Eve", "empty", "Frank"]]
        const k = 7
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "Charlie", "empty"],
            ["Alice", "empty", "Frank"],
            ["empty", "Eve", "empty"],
            ["Bob", "empty", "Dave"]]
        );
    });
    it('Test 7', () => {
        const formation = [
            ["empty", "1", "empty"],
            ["?", "empty", "!"],
            ["empty", ".", "empty"],
            ["3", "empty", "2"]]
        const k = 666
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "1", "empty"],
            ["?", "empty", "!"],
            ["empty", ".", "empty"],
            ["3", "empty", "2"]]
        );
    });
    it('Test 8', () => {
        const formation = [
            ["empty", "", "empty"],
            ["", "empty", ""],
            ["empty", "!!!", "empty"],
            ["", "empty", ""]]
        const k = 541
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "", "empty"],
            ["", "empty", ""],
            ["empty", "", "empty"],
            ["", "empty", "!!!"]]
        );
    });
    it('Test 9', () => {
        const formation = [
            ["empty", "Alice", "empty"],
            ["Bob", "empty", "Charlie"],
            ["empty", "Dave", "empty"],
            ["Eve", "empty", "Frank"]]
        const k = 0
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "Alice", "empty"],
            ["Bob", "empty", "Charlie"],
            ["empty", "Dave", "empty"],
            ["Eve", "empty", "Frank"]]
        );
    });
    it('Test 10', () => {
        const formation = [
            ["empty", "a", "empty"],
            ["b", "empty", "c"],
            ["empty", "d", "empty"],
            ["e", "empty", "f"]]
        const k = 3220832
        const response = volleyballPositions(formation, k);
        expect(response).toEqual([
            ["empty", "f", "empty"],
            ["c", "empty", "d"],
            ["empty", "b", "empty"],
            ["a", "empty", "e"]]
        );
    });

});
