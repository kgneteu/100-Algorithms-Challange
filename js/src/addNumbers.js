//Write a function that returns the sum of two numbers.
//Write a function that returns the sum of all numbers regardless of # of params.

export function add(a, b) {
    return a + b
}


export function add2(...n) {
    return n.reduce(
        (p, c) => p + c, 0
    )
}
