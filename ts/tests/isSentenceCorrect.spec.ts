import {isSentenceCorrect} from '../src/isSentenceCorrect';

describe(isSentenceCorrect.name, () => {
    it('Test 1', () => {
        const data = "This is an example of *correct* sentence.";
        const response = isSentenceCorrect(data);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const data = "!this sentence is TOTALLY incorrecT";
        const response = isSentenceCorrect(data);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const data = "Almost correct sentence";
        const response = isSentenceCorrect(data);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const data = "Something is !wrong! here.";
        const response = isSentenceCorrect(data);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const data = "Time to roll!!!";
        const response = isSentenceCorrect(data);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const data = "This one is okay though, isn't it?";
        const response = isSentenceCorrect(data);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const data = "this sentence, I'm afraid, is a bit incorrect.";
        const response = isSentenceCorrect(data);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const data = "I'm glad this sentence is correct, my friends.";
        const response = isSentenceCorrect(data);
        expect(response).toBe(true);
    });
    it('Test 9', () => {
        const data = "CodeSignal is lame!!!";
        const response = isSentenceCorrect(data);
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const data = "No way, CodeSignal is awesome!";
        const response = isSentenceCorrect(data);
        expect(response).toBe(true);
    });
});
