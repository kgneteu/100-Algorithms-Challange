import {domainType} from '../src/domainType';

describe(domainType.name, () => {
    it('Test 1', () => {
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        const response = domainType(domains);
        expect(response).toEqual(["organization", "commercial", "network", "information"]);
    });
});
