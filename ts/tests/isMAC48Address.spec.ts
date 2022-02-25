import {isMAC48Address} from "../src/isMAC48Address";

describe(isMAC48Address.name, () => {
    it('Test 1', () => {
        const mac = "00-1B-63-84-45-E6";
        const response = isMAC48Address(mac);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const mac = "Z1-1B-63-84-45-E6";
        const response = isMAC48Address(mac);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const mac = "not a mac - address";
        const response = isMAC48Address(mac);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const mac = "12-34-56-78-9A-BG";
        const response = isMAC48Address(mac);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const mac = "12-34-56-78-9A-";
        const response = isMAC48Address(mac);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const mac = "12-34-56-78-9A-B";
        const response = isMAC48Address(mac);
        expect(response).toBe(false);
    });
});
