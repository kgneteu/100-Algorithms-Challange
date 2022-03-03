import {isAdmissibleOverpayment} from '../src/isAdmissibleOverpayment';

describe(isAdmissibleOverpayment.name, () => {
    it('Test 1', () => {
        const prices = [110, 95, 70];
        const notes = [
            "10.0% higher than in-store",
            "5.0% lower than in-store",
            "Same as in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 5);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const prices = [48, 165];
        const notes = [
            "20.00% lower than in-store",
            "10.00% higher than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 2);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const prices = [24.42, 24.42, 24.2424, 85.23];
        const notes = [
            "13.157% higher than in-store",
            "13.157% lower than in-store",
            "Same as in-store",
            "19.24% higher than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 24.24);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const prices = [220];
        const notes = [
            "120.0000% higher than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 120);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const prices = [40, 40, 40, 40];
        const notes = [
            "10.0% higher than in-store",
            "10.0% lower than in-store",
            "10.0% higher than in-store",
            "10.0% lower than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 0);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const prices = [40, 40, 40, 40];
        const notes = [
            "0.001% higher than in-store",
            "0.0% lower than in-store",
            "0.0% higher than in-store",
            "0.0% lower than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 0);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const prices = [110, 110, 110, 110, 110, 110, 110, 110, 110, 160];
        const notes = [
            "10.0% higher than in-store",
            "10.0% higher than in-store",
            "10.0% higher than in-store",
            "10.0% higher than in-store",
            "10.0% higher than in-store",
            "10.0% higher than in-store",
            "10.0% higher than in-store",
            "10.0% higher than in-store",
            "10.0% higher than in-store",
            "60.0% higher than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 150);
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const prices = [20];
        const notes = [
            "100.0% higher than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 9);
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const prices = [35000, 35000];
        const notes = [
            "35000.0% higher than in-store",
            "10000.0% lower than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 150);
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const prices = [20, 20];
        const notes = [
            "20.0% higher than in-store",
            "20.0% lower than in-store"];
        const response = isAdmissibleOverpayment(prices, notes, 0);
        expect(response).toBe(true);
    });
});
