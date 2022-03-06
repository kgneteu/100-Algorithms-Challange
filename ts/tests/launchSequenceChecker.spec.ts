import {launchSequenceChecker} from '../src/launchSequenceChecker';

describe(launchSequenceChecker.name, () => {
    it('Test 1', () => {
        const systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"];
        const stepNumbers = [1, 10, 11, 2, 12, 111];
        const response = launchSequenceChecker(systemNames, stepNumbers);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const systemNames = ["stage_1", "stage_1", "stage_2", "dragon"];
        const stepNumbers = [2, 1, 12, 111];
        const response = launchSequenceChecker(systemNames, stepNumbers);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const systemNames = ["Falcon 9", "Falcon 9", "Falcon 9", "Falcon 9", "Falcon 9", "Falcon 9"];
        const stepNumbers = [1, 3, 5, 7, 7, 9];
        const response = launchSequenceChecker(systemNames, stepNumbers);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const systemNames = ["Dragon", "Dragon", "Dragon", "Dragon", "dragon", "Dragon", "dragon"];
        const stepNumbers = [1, 3, 5, 7, 7, 9, 8];
        const response = launchSequenceChecker(systemNames, stepNumbers);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const systemNames = ["Dragon"];
        const stepNumbers = [1000000000];
        const response = launchSequenceChecker(systemNames, stepNumbers);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const systemNames = ["CrewDragon", "CrewDragon"];
        const stepNumbers = [100, 23];
        const response = launchSequenceChecker(systemNames, stepNumbers);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const systemNames = ["CrewDragon", "Dragon", "SuperDraco", "Falcon 9"];
        const stepNumbers = [4, 3, 2, 1];
        const response = launchSequenceChecker(systemNames, stepNumbers);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const systemNames = ["Dragon", "Falcon 9", "Dragon", "Falcon 9",
            "Falcon 9", "Dragon", "Dragon", "Dragon", "Falcon 9"];
        const stepNumbers = [1, 1, 3, 2, 4, 10, 20, 100, 4];
        const response = launchSequenceChecker(systemNames, stepNumbers);
        expect(response).toBe(false);
    });
});
