import {reverseInParentheses} from '../src/reverseInParentheses';

describe(reverseInParentheses.name, () => {
    it('Test 1', () => {
        const inputString = '(bar)';
        const response = reverseInParentheses(inputString);
        expect(response).toBe('rab');
    });
    it('Test 2', () => {
        const inputString = 'foo(bar)baz';
        const response = reverseInParentheses(inputString);
        expect(response).toBe('foorabbaz');
    });
    it('Test 3', () => {
        const inputString = 'foo(bar)baz(blim)';
        const response = reverseInParentheses(inputString);
        expect(response).toBe('foorabbazmilb');
    });
    it('Test 4', () => {
        const inputString = 'foo(bar(baz))blim';
        const response = reverseInParentheses(inputString);
        expect(response).toBe('foobazrabblim');
    });
    it('Test 5', () => {
        const inputString = '';
        const response = reverseInParentheses(inputString);
        expect(response).toBe('');
    });
    it('Test 6', () => {
        const inputString = '(abc)d(efg)';
        const response = reverseInParentheses(inputString);
        expect(response).toBe('cbadgfe');
    });
});
