export function stringsRearrangement(inputArray: string[]):boolean{
    let ret = false;
    let solution:string[] = [];

    function bt () {
        for (let i = 0; i<inputArray.length; i++) {
            if(ret) break;
            solution.push(inputArray.splice(i,1)[0]);
            if (inputArray.length === 0) {
                ret = ret || checkSolution();
            }
            else{
                bt();
            }
            inputArray.splice(i,0,solution.pop());
        }

    }
    function checkSolution () {
        for (let i = 0; i < solution.length - 1; i++){
            let diff =0;
            for (let j = 0; j<solution[i].length; j++) {
                if (solution[i][j] !== solution[i+1][j]){
                    diff++;
                }
            }
            if(diff !== 1){
                return false;
            }
        }
        return true;
    }
    bt();
    return ret;
}

// function solution(a) {
//     for (let i = 0; i < a.length; i++) {
//         let remaining = findNext(a[i], a);
//         if (remaining.length === 0) return true;
//     }
//     return false;
// }
//
// function findNext(current, a) {
//     if (a.length === 0) return a;
//     for (let i = 0; i < a.length; i++) {
//         if (differsByOneChar(current, a[i])) {
//             let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i+1)));
//             if (remaining.length === 0) return remaining;
//         }
//     }
//     return a;
// }
//
// function differsByOneChar(s1, s2) {
//     let mismatches = 0;
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) mismatches++;
//         if (mismatches > 1) break;
//     }
//     return mismatches === 1;
// }

boolean solution(String[] inputArray) {

    boolean[] used = new boolean[inputArray.length];
    findSequence(inputArray, null, used, 0);
    return success;
}

boolean success = false; // modified by findSequence

// recursive backtracking procedure to find admissible
// sequence of strings in the array. String prev is the
// previous string in the sequence, used[] keeps track
// of which strings have been used so far, and n is the
// current length of the sequence.
// void findSequence(String[] a, String prev, boolean[] used, int n) {
//     if (n == a.length) {
//         success = true;
//         return;
//     }
//     for (int i = 0; i < a.length; i++) {
//         if (!used[i] && (prev == null || differByOne(prev, a[i]))) {
//             used[i] = true;
//             findSequence(a, a[i], used, n+1);
//             used[i] = false;
//         }
//     }
// }
//
// boolean differByOne(String a, String b) {
//     int count = 0;
//     for (int i = 0; i < a.length(); i++) {
//         if (a.charAt(i) != b.charAt(i)) {
//             count++;
//         }
//     }
//     return count == 1;
// }
//todo check
console.log(stringsRearrangement(["aba", "bbb", "bab"]));
console.log(stringsRearrangement(["ab", "bb", "aa"]));
