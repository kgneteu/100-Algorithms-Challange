import { addBorder } from '../src/addBorder';

describe(addBorder.name, () => {
    it('Test 1', () => {
        const data = ['abc', 'ded'];
        const response = addBorder(data);
        expect(response).toEqual([
            "*****",
            "*abc*",
            "*ded*",
            "*****"
        ]);
    });
});
