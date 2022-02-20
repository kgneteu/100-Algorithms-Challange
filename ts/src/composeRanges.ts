// Given a sorted integer array that does not contain any duplicates,
// return a summary of the number ranges it contains.
//
//     Example
//
// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be
// composeRanges(nums) = ["-1->2", "6->7", "9"].
//     Hints
//
// push()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.integer nums A sorted array of unique integers.
//
//     Guaranteed constraints:
//
//     0 ≤ nums.length ≤ 15, (231 - 1) ≤ nums[i] ≤ 231 - 1.
//
//     [output] array.string

export function composeRanges(nums: number[]): string[] {
    let ranges = [];
    let rangeStart = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            ranges.push([rangeStart, nums[i]])
            rangeStart = nums[i + 1];
        }
    }
    ranges.push([rangeStart, nums[nums.length - 1]])

    return ranges.map(range => {
        if (range[0] === range[1]) {
            return range[0].toString()
        } else {
            return `${range[0]}->${range[1]}`
        }
    })
}

