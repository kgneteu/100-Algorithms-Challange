import { areEquallyStrong } from '../src/areEquallyStrong';

describe(areEquallyStrong.name, () => {
    it('Test 1', () => {
        // arrange
        const yourLeft = 10;
        const yourRight = 15;
        const friendsLeft = 15;
        const friendsRight = 10;

        // act
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);

        // assert
        expect(response).toEqual(true);
    });

    it('Test 2', () => {
        // arrange
        const yourLeft = 15;
        const yourRight = 10;
        const friendsLeft = 15;
        const friendsRight = 10;

        // act
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);

        // assert
        expect(response).toEqual(true);
    });

    it('Test 3', () => {
        // arrange
        const yourLeft = 15;
        const yourRight = 10;
        const friendsLeft = 15;
        const friendsRight = 9;

        // act
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);

        // assert
        expect(response).toEqual(false);
    });

    it('Test 4', () => {
        // arrange
        const yourLeft = 12;
        const yourRight = 10;
        const friendsLeft = 8;
        const friendsRight = 14;

        // act
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);

        // assert
        expect(response).toEqual(false);
    });
});
