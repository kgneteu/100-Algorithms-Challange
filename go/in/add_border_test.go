import {addBorder} from '../src/addBorder.js';

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
