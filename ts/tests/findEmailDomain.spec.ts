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

    it('Test 3', () => {
        const address = "\" \"@space.com";
        const response = findEmailDomain(address);
        expect(response).toBe("space.com");
    });

    it('Test 4', () => {
        const address = "someaddress@yandex.ru";
        const response = findEmailDomain(address);
        expect(response).toBe("yandex.ru");
    });

    it('Test 5', () => {
        const address = "\" \"@xample.org";
        const response = findEmailDomain(address);
        expect(response).toBe("xample.org");
    });
});
