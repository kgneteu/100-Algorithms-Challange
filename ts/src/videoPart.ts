// You have been watching a video for some time.
// Knowing the total video duration find out what portion
// of the video you have already watched.
//
//     Example
//
// For part = "02:20:00" and total = "07:00:00", the output should be
// solution(part, total) = [1, 3].
//
//     You have watched 1 / 3 of the whole video.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string part
//
// A string of the following format "hh:mm:ss" representing the time you
// have been watching the video.
//
//     [input] string total
//
// A string of the following format "hh:mm:ss" representing the total video duration.
//
//     [output] array.integer
//
// An array of the following format [a, b] (where a / b is a reduced fraction).

export function videoPart(part: string, total: string): number[] {
    const gcd = (a: number, b: number): number => !b ? a : gcd(b, a % b)
    const totalSec = total.split(":").reduce((a, v, i) => a + +v * 60 ** (2 - i), 0)
    const partSec = part.split(":").reduce((a, v, i) => a + +v * 60 ** (2 - i), 0)
    return [partSec / gcd(totalSec, partSec), totalSec / gcd(totalSec, partSec)]
}

//console.log(videoPart("00:02:20", "00:10:00"))
//console.log(videoPart("02:20:00", "07:00:00"))
