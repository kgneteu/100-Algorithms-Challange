// Check if the given string is a correct time representation of the 24-hour clock.
//
//     Example
//
// For time = "13:58", the output should be validTime(time) = true;
//
// For time = "25:51", the output should be validTime(time) = false;
//
// For time = "02:76", the output should be validTime(time) = false.
//
//     Hints
//
// parseInt()
// split()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//     [input] string time
// A string representing time in HH:MM format. It is guaranteed that the first two characters,
// as well as the last two characters, are digits.
//
//     [output] boolean
// true if the given representation is correct, false otherwise.

export function validTime(time: string): boolean {
    const [h, m] = time.split(":").map(v => Number(v));
    if (isNaN(h) || h < 0 || h > 23) return false;
    if (isNaN(m) || m < 0 || m > 59) return false;
    return true;
}

//todo
// solution = t => /^([0-1]\d|2[0-3]):[0-5]\d$/.test(t);
//return (new Date('1900-01-01 '+time) != 'Invalid Date' && time != '24:00')
//return t.split(":")[0]<24&&t.split(":")[1]<60}
