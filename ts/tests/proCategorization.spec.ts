import {proCategorization} from '../src/proCategorization';

describe(proCategorization.name, () => {
    it('Test 1', () => {
        const pros = ["Jack", "Leon", "Maria"];
        const preferences = [["Computer repair", "Handyman", "House cleaning"],
            ["Computer lessons", "Computer repair", "Data recovery service"],
            ["Computer lessons", "House cleaning"]];
        const response = proCategorization(pros, preferences);
        expect(response).toEqual([[["Computer lessons"], ["Leon", "Maria"]],
            [["Computer repair"], ["Jack", "Leon"]],
            [["Data recovery service"], ["Leon"]],
            [["Handyman"], ["Jack"]],
            [["House cleaning"], ["Jack", "Maria"]]]);
    });
    it('Test 2', () => {
        const pros = ["First", "Fourth", "Second", "Third"];
        const preferences = [["One", "Three", "Two"],
            ["One", "One three", "One two"],
            ["One two", "One two three", "Two"],
            ["One", "One three", "One two", "One two three", "Three", "Two"]];
        const response = proCategorization(pros, preferences);
        expect(response).toEqual([[["One"], ["First", "Fourth", "Third"]],
            [["One three"], ["Fourth", "Third"]],
            [["One two"], ["Fourth", "Second", "Third"]],
            [["One two three"], ["Second", "Third"]],
            [["Three"], ["First", "Third"]],
            [["Two"], ["First", "Second", "Third"]]]);
    });
    it('Test 3', () => {
        const pros = ["Man"];
        const preferences = [["Beer"]];
        const response = proCategorization(pros, preferences);
        expect(response).toEqual([[["Beer"], ["Man"]]]);
    });
});
