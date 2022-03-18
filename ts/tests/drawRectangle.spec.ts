import {drawRectangle} from '../src/drawRectangle';

describe(drawRectangle.name, () => {
    it('Test 1', () => {
        const canvas = [
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["b", "b", "b", "b", "b", "b", "b", "b"],
            ["b", "b", "b", "b", "b", "b", "b", "b"]]
        const rectangle = [1, 1, 4, 3]
        const response = drawRectangle(canvas, rectangle);
        expect(response).toEqual([
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "*", "-", "-", "*", "a", "a", "a"],
            ["a", "|", "a", "a", "|", "a", "a", "a"],
            ["b", "*", "-", "-", "*", "b", "b", "b"],
            ["b", "b", "b", "b", "b", "b", "b", "b"]]);
    });
    it('Test 2', () => {
        const canvas = [
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["b", "b", "b", "b", "b", "b", "b", "b"]]
        const rectangle = [0, 0, 1, 1]
        const response = drawRectangle(canvas, rectangle);
        expect(response).toEqual([
            ["*", "*", "a", "a", "a", "a", "a", "a"],
            ["*", "*", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["b", "b", "b", "b", "b", "b", "b", "b"]]);
    });
    it('Test 3', () => {
        const canvas = [
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["b", "b", "b", "b", "b", "b", "b", "b"]]
        const rectangle = [0, 2, 7, 3]
        const response = drawRectangle(canvas, rectangle);
        expect(response).toEqual([
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a"],
            ["*", "-", "-", "-", "-", "-", "-", "*"],
            ["*", "-", "-", "-", "-", "-", "-", "*"]]);
    });
    it('Test 4', () => {
        const canvas = [
            ["a", "a", "a"],
            ["a", "a", "a"],
            ["a", "a", "a"],
            ["b", "b", "b"]]
        const rectangle = [0, 0, 2, 3]
        const response = drawRectangle(canvas, rectangle);
        expect(response).toEqual([
            ["*", "-", "*"],
            ["|", "a", "|"],
            ["|", "a", "|"],
            ["*", "-", "*"]]);
    });
    it('Test 5', () => {
        const canvas = [
            ["#", "#"],
            ["a", "a"],
            ["a", "a"],
            ["b", "b"]]
        const rectangle = [0, 1, 1, 2]
        const response = drawRectangle(canvas, rectangle);
        expect(response).toEqual([
            ["#", "#"],
            ["*", "*"],
            ["*", "*"],
            ["b", "b"]]);
    });
    it('Test 6', () => {
        const canvas = [
            ["1", "2"],
            ["4", "3"],
            ["5", "6"],
            ["8", "7"]]
        const rectangle = [0, 0, 1, 3]
        const response = drawRectangle(canvas, rectangle);
        expect(response).toEqual([
            ["*", "*"],
            ["|", "|"],
            ["|", "|"],
            ["*", "*"]]);
    });

});
