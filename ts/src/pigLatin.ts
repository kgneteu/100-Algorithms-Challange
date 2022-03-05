// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.
//
// Example
//
// pigLatin("glove") should return "oveglay".
// pigLatin("eight") should return "eightway".
// Hints
//
// split()
// test()
// join()
// push()

export function pigLatin(str: string): string {
    const vowels = "aeiouy";
    if (vowels.includes(str[0])) {
        return str + "way";
    } else {
        for (let i = 2; i < str.length - 1; i++) {
            if (vowels.includes(str[i])) {
                return str.slice(i) + str.slice(0, i) + "ay";
            }
        }
    }
}

// console.log(pigLatin("glove"));
// console.log(pigLatin("eight"));
