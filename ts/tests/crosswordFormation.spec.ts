import {crosswordFormation} from '../src/crosswordFormation';

describe(crosswordFormation.name, () => {
    it('Test 1', () => {
        const data = ["crossword", "square", "formation", "something"];
        const response = crosswordFormation(data);
        expect(response).toBe(6);
    });
    it('Test 2', () => {
        const data = ["anaesthetist", "thatch", "ethnics", "sabulous"]
        const response = crosswordFormation(data);
        expect(response).toBe(0);
    });
    it('Test 3', () => {
        const data = ["eternal", "texas", "chainsaw", "massacre"]
        const response = crosswordFormation(data);
        expect(response).toBe(4);
    });
    it('Test 4', () => {
        const data = ["africa", "america", "australia", "antarctica"]
        const response = crosswordFormation(data);
        expect(response).toBe(62);
    });
    it('Test 5', () => {
        const data = ["phenomenon", "remuneration", "particularly", "pronunciation"]
        const response = crosswordFormation(data);
        expect(response).toBe(62);
    });
    it('Test 6', () => {
        const data = ["onomatopoeia", "philosophical", "provocatively", "thesaurus"]
        const response = crosswordFormation(data);
        expect(response).toBe(20);
    });
});
