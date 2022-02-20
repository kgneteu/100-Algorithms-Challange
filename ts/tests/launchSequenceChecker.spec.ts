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
});
