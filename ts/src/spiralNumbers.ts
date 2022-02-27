// Construct a square matrix with a size N × N containing integers from 1 to N * N
// in a spiral order, starting from top-left and in clockwise direction.
//
// Example
//
// For n = 3, the output should be
//
// solution(n) = [
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// Matrix size, a positive integer.
//
//     Guaranteed constraints:
//     3 ≤ n ≤ 100.
//
//     [output] array.array.integer

// A = [[0] * n for _ in range(n)]
// i = j = di = 0
// dj = 1
// for A[i][j] in range(1, n**2 + 1):
// if A[(i+di) % n][(j+dj) % n]:
// di, dj = dj, -di
// i += di
// j += dj
// return A

export function spiralNumbers(n: number): number[][] {
    let result: number[][] = new Array(n).fill(0)
         .map(() => new Array(n).fill(0));

    let m:number[][] = [];
    let i = 0;
    while(result.length) {
        m.reverse();
        m = m.length?m[0].map((col, i) => m.map(row => row[i])) : m;
        m.unshift(result.splice(-(Math.floor(i/2)+1)));
        i++;
    }
    return m;
    // //const result = new Array(n).fill(0).new Array(n).fill(0));
    // let result: number[][] = new Array(n).fill(0)
    //     .map(() => new Array(n).fill(0));
    // let di = 0;
    // let i = 0;
    // let j = 0;
    // let dj = 1;
    // for (let k = 1; k < n * n + 1; k++) {
    //     result[i][j] = k;
    //     console.log(result[(i+di) % n][(j+dj) % n])
    //     // if (result[(i+di) % n][(j+dj) % n]){
    //     //     [di,dj]=[dj,-di]
    //     // }
    //     i += di;
    //     j += dj;
    //     console.log(i,j)
    //     // let [x, y] = coords(i, n);
    //     // console.log(x,y)
    //     // result[x][y] = i + 1;
    // }
    // return result;
}

console.log(spiralNumbers(4))
//     [[1,2,3,4,5],
//     [16,17,18,19,6],
//     [15,24,25,20,7],
//     [14,23,22,21,8],
//     [13,12,11,10,9]]
//
//     [0,0,0,0,0,0,0]]
// Expected Output:
//     [[1,2,3,4,5,6,7],
//         [24,25,26,27,28,29,8],
//         [23,40,41,42,43,30,9],
//         [22,39,48,49,44,31,10],
//         [21,38,47,46,45,32,11],
//         [20,37,36,35,34,33,12],
//         [19,18,17,16,15,14,13]]
