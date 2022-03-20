import {curiousClock} from '../src/curiousClock';

describe(curiousClock.name, () => {
    it('Test 1', () => {
        const t1 = "2016-08-26 22:40";
        const t2 = "2016-08-29 10:00"
        const response = curiousClock(t1,t2);
        expect(response).toBe("2016-08-24 11:20");
    });
    it('Test 2', () => {
        const t1 = "2016-08-26 22:40"
        const t2 = "2016-08-26 22:41"
        const response = curiousClock(t1,t2);
        expect(response).toBe("2016-08-26 22:39");
    });
    it('Test 3', () => {
        const t1 = "2015-01-14 09:12"
        const t2 = "2015-11-04 17:36"
        const response = curiousClock(t1,t2);
        expect(response).toBe("2014-03-26 00:48");
    });
    it('Test 4', () => {
        const t1 = "2016-02-28 12:21"
        const t2 = "2016-03-01 22:21"
        const response = curiousClock(t1,t2);
        expect(response).toBe("2016-02-26 02:21");
    });
    it('Test 5', () => {
        const t1 = "1995-05-30 13:48"
        const t2 = "2016-04-22 05:32"
        const response = curiousClock(t1,t2);
        expect(response).toBe("1974-07-06 22:04");
    });
    it('Test 6', () => {
        const t1 = "1992-09-29 00:00"
        const t2 = "1998-12-04 23:59"
        const response = curiousClock(t1,t2);
        expect(response).toBe("1986-07-25 00:01");
    });

});
