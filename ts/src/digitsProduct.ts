// Given an integer product,
// find the smallest positive (i.e. greater than 0)
// integer the product of whose digits is equal to product.
// If there is no such integer, return -1 instead.
//
//     Example
//
// For product = 12, the output should be
// solution(product) = 26;
//
// For product = 19, the output should be
// solution(product) = -1.
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer product
//
// Guaranteed constraints:
//     0 ≤ product ≤ 600.
//
//     [output] integer


export function digitsProduct(product: number): number {
    //task is incorrect

    // let min = -1;
    // if (product === 0) return 10;
    // if (product < 10) return product;
    // for (let i = 10; i < product * 10; i++) {
    //     let digits = i.toString().split("")
    //     let pr = digits.reduce((ac, v) => ac * +v, 1)
    //     if (pr == product) return i;
    // }
    // return min;

    if (product == 0) return 10;
    if (product == 1) return 1;
    let divisor = 10, power = 1, result = 0;
    while (product > 1) {
        if (--divisor == 1) return -1;
        while (product % divisor == 0) {
            product /= divisor;
            result += divisor * power;
            power *= 10;
        }
    }
    return result;
}

// console.log(digitsProduct(12)) //26
// console.log(digitsProduct(7)) //26
// console.log(digitsProduct(4)) //26
// console.log(digitsProduct(450), 2 * 5 * 5 * 9) //2559
// console.log(digitsProduct(19))//-1
// console.log(digitsProduct(0))//10
// console.log(digitsProduct(13))//-1
// console.log(digitsProduct(1))//-1
// console.log(digitsProduct(243))//399
// console.log(digitsProduct(576))//889
//console.log(digitsProduct(360))//589
