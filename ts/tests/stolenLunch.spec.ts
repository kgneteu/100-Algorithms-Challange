import { stolenLunch } from '../src/stolenLunch';

describe(stolenLunch.name, () => {
    it('Test 1', () => {
       
        const note = "you'll n4v4r 6u4ss 8t: cdja";

   
        const response = stolenLunch(note);


        expect(response).toBe("you'll never guess it: 2390");
    });
});
