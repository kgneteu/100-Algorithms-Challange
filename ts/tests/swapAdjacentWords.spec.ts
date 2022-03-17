import {swapAdjacentWords} from '../src/swapAdjacentWords';

describe(swapAdjacentWords.name, () => {
    it('Test 1', () => {
        const data = "CodeFight On";
        const response = swapAdjacentWords(data);
        expect(response).toBe("On CodeFight");
    });
    it('Test 2', () => {
        const data = "How are you today guys";
        const response = swapAdjacentWords(data);
        expect(response).toBe("are How today you guys");
    });
    it('Test 3', () => {
        const data = "IAmALongStringWithNoWhiteSpaceCharacters";
        const response = swapAdjacentWords(data);
        expect(response).toBe("IAmALongStringWithNoWhiteSpaceCharacters");
    });
    it('Test 4', () => {
        const data = "A b C D e F g h I j";
        const response = swapAdjacentWords(data);
        expect(response).toBe("b A D C F e h g j I");
    });
    it('Test 5', () => {
        const data = "";
        const response = swapAdjacentWords(data);
        expect(response).toBe("");
    });
});
