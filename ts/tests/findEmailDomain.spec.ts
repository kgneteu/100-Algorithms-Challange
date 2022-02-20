import {findEmailDomain} from '../src/findEmailDomain';

describe(findEmailDomain.name, () => {
    it('Test 1', () => {
        const address = 'prettyandsimple@example.com';
        const response = findEmailDomain(address);
        expect(response).toBe('example.com');
    });

    it('Test 2', () => {
        const address = '<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org';
        const response = findEmailDomain(address);
        expect(response).toBe('example.org');
    });
});
