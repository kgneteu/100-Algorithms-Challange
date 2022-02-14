import { areEquallyStrong } from '.../src/src/areEquallyStrong';

describe(areEquallyStrong.name, () => {
    it('Test 1', () => {
        const yourLeft = 10;
        const yourRight = 15;
        const friendsLeft = 15;
        const friendsRight = 10;
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);
        expect(response).toEqual(true);
    });

    it('Test 2', () => {
        const yourLeft = 15;
        const yourRight = 10;
        const friendsLeft = 15;
        const friendsRight = 10;
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);
        expect(response).toEqual(true);
    });

    it('Test 3', () => {
        const yourLeft = 15;
        const yourRight = 10;
        const friendsLeft = 15;
        const friendsRight = 9;
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);
        expect(response).toEqual(false);
    });

    it('Test 4', () => {
        const yourLeft = 12;
        const yourRight = 10;
        const friendsLeft = 8;
        const friendsRight = 14;
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);
        expect(response).toEqual(false);
    });
});
