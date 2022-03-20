// You are given n rectangular boxes,
// the ith box has the length lengthi,
// the width widthi and the height heighti.
// Your task is to check if it is possible to pack all boxes into
// one so that inside each box there is no more than one another box
// (which, in turn, can contain at most one another box, and so on).
// More formally, your task is to check whether there is such sequence of n different
// numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi
// can be put into the box number pi+1.
// A box can be put into another box if all sides of the first one are less
// than the respective ones of the second one.
// You can rotate each box as you wish,
// i.e. you can swap its length, width and height if necessary.
//
//     Example
//
//     For length = [1, 3, 2],
//     width = [1, 3, 2],
//     and height = [1, 3, 2], the output should be
// solution(length, width, height) = true;
// For length = [1, 1], width = [1, 1], and height = [1, 1], the output should be
// solution(length, width, height) = false;
// For length = [3, 1, 2], width = [3, 1, 2], and height = [3, 2, 1], the output should be
// solution(length, width, height) = false.
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.integer length
//
// Array of positive integers.
//
//     Guaranteed constraints:
//     1 ≤ length.length ≤ 104,
//     1 ≤ length[i] ≤ 2 · 104.
//
//     [input] array.integer width
//
// Array of positive integers.
//
//     Guaranteed constraints:
//     width.length = length.length,
//         1 ≤ width[i] ≤ 2 · 104.
//
//     [input] array.integer height
//
// Array of positive integers.
//
//     Guaranteed constraints:
//     height.length = length.length,
//         1 ≤ height[i] ≤ 2 · 104.
//
//     [output] boolean
//
// true if it is possible to put all boxes into one, false otherwise.
export function boxesPacking(length: number[], width: number[], height: number[]): boolean {
    const boxes: { [index: number]: Array<Number> } = {}
    for (let i = 0; i < length.length; i++) {
        const v = length[i] * width[i] * height[i];
        if (boxes.hasOwnProperty(v)) return false;
        boxes[v] = [length[i], width[i], height[i]].sort((a, b) => a - b);
    }
    return Object.keys(boxes).map(v => +v).sort((a, b) => a - b)
        .filter((v, i, a) =>
            i === 0 ? false :
                !(boxes[v][0] > boxes[a[i - 1]][0] && boxes[v][1] > boxes[a[i - 1]][1] && boxes[v][2] > boxes[a[i - 1]][2])
        ).length === 0;

    //todo check
    // a = l.map((j,i)=>[j,w[i],h[i]].sort((x,y)=>x-y)).sort((x,y)=>x[0]-y[0])
    // return [...Array(3).keys()].map(i=>a.map(j=>j[i])).every(i=>[...new Set(i)].sort((x,y)=>x-y).toString()==i.toString())}
}

//console.log(boxesPacking([1, 3, 2], [1, 3, 2], [1, 3, 2]))
