import {addBorder} from "./src/addBorder.js";
import {allLongestStrings} from "./src/allLongestStrings.js";
import {addTwoDigits} from "./src/addTwoDigits.js";
import {add, add2} from "./src/addNumbers.js";
import {adjacentElementsProduct} from "./src/adjacentElementsProduct.js";


console.log(addBorder(["abc","bcd"]).join('\n'));
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]).join('\n'));
console.log(addTwoDigits(29));
console.log(add(1,2));
console.log(add2(1,2, 3));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
