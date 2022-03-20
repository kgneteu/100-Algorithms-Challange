// Whenever you decide to celebrate your birthday you always do this
// your favorite café, which is quite popular and as such usually very crowded.
// This year you got lucky: when you and your friend enter
// the café you're surprised to see that it's almost empty.
// The waiter lets slip that there are always very few people on this day
// of the week.
//
// You enjoyed having the café all to yourself,
// and are now curious about the next time you'll be this lucky.
// Given the current birthdayDate,
// determine the number of years until it will fall on the same day of the week.
//
// For your convenience, here is the list of months lengths
// (from January to December, respectively):
//
// Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
// Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise you birthday is celebrated each year.
//
//     Example
//
// For birthdayDate = "02-01-2016", the output should be
// solution(birthdayDate) = 5.
//
// February 1 in 2016 is a Monday. The next year in which this same date will be Monday too is 2021. 2021 - 2016 = 5, which is the answer.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string birthdayDate
//
// A string representing the correct date in the format mm-dd-yyyy, where mm is the number of month (1-based, i.e. 01 for January, 02 for February and so on), dd is the day, and yyyy is the year.
//
//     Guaranteed constraints:
//     1 ≤ int(mm) ≤ 12,
//     1 ≤ int(dd) ≤ 31,
//     1900 ≤ int(yyyy) ≤ 2100.
//
//     [output] integer
//
// An integer describing the number of years until your birthday falls on the same day of the week.

export function dayOfWeek(birthdayDate: string): number {
    // let [m, d, y] = birthdayDate.split("-").map(v => +v)
    // const day = new Date(y, m - 1, d).getDay()
    // let step = d === 29 && m === 2 ? 4 : 1;
    // let fYear = y + step;
    // let dt = new Date(fYear, m - 1, d);
    // while (dt.getDay() !== day  ) {
    //     dt = new Date(fYear, m - 1, d);
    //     fYear += step;
    // }
    // console.log(dt)
    // return fYear - y;
    let [m, d, y] = birthdayDate.split("-").map(v => +v)
    const day = new Date(y, m - 1, d).getDay()
    let step = d === 29 && m === 2 ? 4 : 1;
    let fYear = y+step;
    while (true) {
        let dt = new Date(fYear, m - 1, d);
        if (dt.getDay() === day && dt.getMonth()  === m -1) {
            console.log(dt.getFullYear())
            break;
        }
        fYear += step;
    }
    return fYear - y;
}
//
console.log(dayOfWeek("02-01-2016"))
console.log(dayOfWeek("02-29-2016"))
console.log(dayOfWeek("02-29-2072"))
