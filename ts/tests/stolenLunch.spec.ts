import {stolenLunch} from '../src/stolenLunch';

describe(stolenLunch.name, () => {
    it('Test 1', () => {
        const note = "you'll n4v4r 6u4ss 8t: cdja";
        const response = stolenLunch(note);
        expect(response).toBe("you'll never guess it: 2390");
    });
    it('Test 2', () => {
        const note = "";
        const response = stolenLunch(note);
        expect(response).toBe("");
    });
    it('Test 3', () => {
        const note = "0123456789";
        const response = stolenLunch(note);
        expect(response).toBe("abcdefghij");
    });
    it('Test 4', () => {
        const note = "jihgfedcba";
        const response = stolenLunch(note);
        expect(response).toBe("9876543210");
    });
    it('Test 5', () => {
        const note = "you won't know!!";
        const response = stolenLunch(note);
        expect(response).toBe("you won't know!!");
    });
    it('Test 6', () => {
        const note = "just 63jd73 some random note jkhdf83 ds823 that you, dfj238 dsf38 little one?, will abjk38 s83    skdu3 29never get!";
        const response = stolenLunch(note);
        expect(response).toBe("9ust gd93hd som4 r0n3om not4 9k735id 3sicd t70t you, 359cdi 3s5di l8ttl4 on4?, w8ll 019kdi sid    sk3ud cjn4v4r 64t!");
    });
});
