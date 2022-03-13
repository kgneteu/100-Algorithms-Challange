// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
//     A sentence is considered correct if:
//
// it starts with a capital letter;
// it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
// full stops,
// question marks and exclamation points don't appear anywhere else in the sentence.
// Given a sentence, return true if it is correct and false otherwise.
//
// Example
//
// For sentence = "This is an example of *correct* sentence.",
//     the output should be
// solution(sentence) = true;
//
// For sentence = "!this sentence is TOTALLY incorrecT",
//     the output should be
// solution(sentence) = false.
//
//     Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] string sentence
//
// A string without newline characters.
//
//     Guaranteed constraints:
//     2 ≤ sentence.length ≤ 100.
//
//     [output] boolean
//
// true if the given sentence is correct, false otherwise.
function isSentenceCorrect(sentence:string):boolean {
    let re = /^[A-Z][^\.\?!]*[\.\?!]$/;
    return re.test(sentence);
}

// console.log(solution("This is an example of *correct* sentence."))
// console.log(solution("!this sentence is TOTALLY incorrecT"))
// console.log(solution("Something is !wrong! here."))
