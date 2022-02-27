import {fileNaming} from '../src/fileNaming';

describe(fileNaming.name, () => {
    it('Test 1', () => {
        const data = ["doc", "doc", "image", "doc(1)", "doc"];
        const response = fileNaming(data);
        expect(response).toEqual(["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]);
    });
    it('Test 2', () => {
        const data = ["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
        const response = fileNaming(data);
        expect(response).toEqual(["a(1)", "a(6)", "a", "a(2)", "a(3)", "a(4)",
            "a(5)", "a(7)", "a(8)", "a(9)", "a(10)", "a(11)"]);
    });
    it('Test 3', () => {
        const data = ["dd", "dd(1)", "dd(2)", "dd", "dd(1)", "dd(1)(2)", "dd(1)(1)", "dd", "dd(1)"];
        const response = fileNaming(data);
        expect(response).toEqual(["dd", "dd(1)", "dd(2)", "dd(3)", "dd(1)(1)", "dd(1)(2)", "dd(1)(1)(1)", "dd(4)", "dd(1)(3)"]);
    });
    it('Test 4', () => {
        const data: string[] = [];
        const response = fileNaming(data);
        expect(response).toEqual([]);
    });
    it('Test 5', () => {
        const data = ["name", "name", "name(1)", "name(3)", "name(2)", "name(2)"];
        const response = fileNaming(data);
        expect(response).toEqual(["name", "name(1)", "name(1)(1)", "name(3)", "name(2)", "name(2)(1)"]);
    });
});
