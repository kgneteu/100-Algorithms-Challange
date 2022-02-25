import {isIPv4Address} from "../src/isIPv4Address";

describe(isIPv4Address.name, () => {
    it('Test 1', () => {
        const data = "127.0.0.1";
        const response = isIPv4Address(data);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const data = "192.168.1.1";
        const response = isIPv4Address(data);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const data = "0..1.0.0";
        const response = isIPv4Address(data);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const data = ".254.255.0";
        const response = isIPv4Address(data);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const data = "1.1.1.1a";
        const response = isIPv4Address(data);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const data = "64.233.161.00";
        const response = isIPv4Address(data);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const data = "64.233.161.-1";
        const response = isIPv4Address(data);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const data = "64.256.161.1";
        const response = isIPv4Address(data);
        expect(response).toBe(false);
    });

});
