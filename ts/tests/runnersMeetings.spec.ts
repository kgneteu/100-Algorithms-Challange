import {runnersMeetings} from '../src/runnersMeetings';

describe(runnersMeetings.name, () => {
    it('Test 1', () => {
        const startPosition = [1, 4, 2]
        const speed = [27, 18, 24]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(3);
    });
    it('Test 2', () => {
        const startPosition = [1, 4, 2]
        const speed = [5, 6, 2]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(2);
    });
    it('Test 3', () => {
        const startPosition =  [1, 2, 3]
        const speed = [1, 1, 1]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(-1);
    });
    it('Test 4', () => {
        const startPosition = [1, 1000]
        const speed = [23, 22]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(2);
    });
    it('Test 5', () => {
        const startPosition = [-2, 0, 2, 4]
        const speed = [6, 5, 4, 3]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(4);
    });
    it('Test 6', () => {
        const startPosition = [-2, 0, 2, 4]
        const speed = [6, 5, 4, 2]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(3);
    });
    it('Test 7', () => {
        const startPosition = [4, 5, 6]
        const speed = [2, 2, 2]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(-1);
    });
    it('Test 8', () => {
        const startPosition = [5, 9, 6]
        const speed = [7, 8, 3]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(2);
    });
    it('Test 9', () => {
        const startPosition = [88, 86, -77, -3, -83, 80, 58, 41, -91, 29, -26, -44, 97]
        const speed = [26, 16, 14, 11, 23, 17, 6, 15, 17, 18, 14, 5, 9]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(2);
    });
    it('Test 10', () => {
        const startPosition = [321, 487, -601, 246, -623, 447, -313, 987, 444, -455, 606, -370, -678, 422, -623, 513, -617, 500, -58, 856, -491, -601, -725, -989, -521]
        const speed =[34, 47, 31, 1, 18, 48, 43, 8, 48, 30, 40, 12, 45, 41, 39, 25, 43, 47, 15, 47, 11, 38, 43, 12, 10]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(3);
    });
    it('Test 11', () => {
        const startPosition = [437, -919, 996, 703, 647, 103, -834, -193, -790, -219, 784, 325, 441, 894, 143, 982, -968, 25, 983, -633, 473, -180, -435, -418, 209, -527, 291, -760, -490, -517, 790, -596, -863, -714, 844, -42, 800, 975, 78, 957, -172, 220, -578]
        const speed = [16, 8, 9, 39, 18, 22, 28, 4, 40, 30, 27, 18, 1, 23, 13, 19, 13, 16, 4, 42, 22, 12, 41, 11, 6, 46, 6, 36, 8, 18, 32, 30, 42, 50, 29, 20, 36, 29, 21, 23, 35, 15, 31]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(4);
    });
    it('Test 12', () => {
        const startPosition = [-4715, 2503, -3594, -9444, 612, -8704, 586, -7428, 15, 1734, -2916, -2506, -6588, -3943, 5755, -8804, 5565, -9411, 4264, -5661, -1013, -4671, 10000, -9642, 2709, -3929, -4326, 2019, -348, 8530, -2782, -3358, -4125, -9901, 8943, -6084, 4744, -1371, 7708, 4920, -886, -3766, 239, 7036, -9964, 254, 8654, 5421, 3769, -9919, -665, 5469, 4690, 5928, 7868, 320, -6593, 7714, 9320, -3323, -147, 2367, 5328, -2978, -5455, 7224, -8856, 2974, 4495, 5747, 930, 780, 802, 3839, 2293, -10000, -485, 2643, -8543, -7991, -7109, 1298, 5236, -5206, 1509, -7974, 5168, -7893, 3067, -1103, -3706, -443, 8686, -7864, 3648, 5239, 5216, -4088, -597, 8758]
        const speed = [23, 66, 64, 84, 89, 96, 84, 86, 39, 15, 61, 1, 33, 28, 57, 63, 42, 85, 6, 12, 84, 100, 43, 38, 46, 94, 88, 2, 44, 81, 18, 22, 67, 37, 77, 14, 98, 75, 98, 91, 70, 80, 47, 56, 11, 90, 55, 82, 51, 42, 28, 10, 89, 32, 55, 65, 76, 25, 73, 73, 96, 74, 29, 84, 59, 78, 76, 71, 41, 47, 45, 100, 56, 95, 66, 35, 72, 90, 50, 91, 25, 24, 98, 77, 94, 26, 93, 31, 23, 91, 84, 65, 75, 96, 86, 88, 71, 89, 56, 5]
        const response = runnersMeetings(startPosition, speed);
        expect(response).toBe(3);
    });
});
