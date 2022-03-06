import {domainType} from '../src/domainType';

describe(domainType.name, () => {
    it('Test 1', () => {
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        const response = domainType(domains);
        expect(response).toEqual(["organization", "commercial", "network", "information"]);
    });
    it('Test 2', () => {
        const domains = ["com.net.info",
            "org.com.net",
            "net.com.org",
            "info.net.com",
            "net.net.com",
            "com.com.org",
            "info.info.net",
            "org.org.info"];
        const response = domainType(domains);
        expect(response).toEqual(["information",
            "network",
            "organization",
            "commercial",
            "commercial",
            "organization",
            "network",
            "information"]);
    });
    it('Test 3', () => {
        const domains = ["a.info",
            "a.com",
            "a.net",
            "a.org",
            "a.info",
            "a.com"];
        const response = domainType(domains);
        expect(response).toEqual(["information",
            "commercial",
            "network",
            "organization",
            "information",
            "commercial"]);
    });
});
