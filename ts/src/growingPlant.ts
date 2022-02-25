// Each day a plant is growing by upSpeed meters.
// Each night that plant's height decreases by downSpeed meters due to the lack of sun heat.
// Initially, plant is 0 meters tall.
// We plant the seed at the beginning of a day.
// We want to know when the height of the plant will reach a certain level.
//
// Example
//
// For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be
// growingPlant(upSpeed, downSpeed, desiredHeight) = 10.
//
// #	Day	Night
// 1	100	90
// 2	190	180
// 3	280	270
// 4	370	360
// 5	460	450
// 6	550	540
// 7	640	630
// 8	730	720
// 9	820	810
// 10	910	900
// The plant first reaches a height of 910 on day 10.
//
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] integer upSpeed
// A positive integer representing the daily growth.
//
//     Guaranteed constraints:
//
//     5 ≤ upSpeed ≤ 100.
//
//     [input] integer downSpeed
// A positive integer representing the nightly decline.
//
//     Guaranteed constraints:
//
//     2 ≤ downSpeed < upSpeed.
//
//     [input] integer desiredHeight
// A positive integer representing the threshold.
//
//     Guaranteed constraints:
//
//     4 ≤ desiredHeight ≤ 1000.
//
//     [output] integer
// The number of days that it will take for the plant to reach/pass desiredHeight
// (including the last day in the total count).

export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let totalHeight = 0;
    let day = 0;
    while (totalHeight < desiredHeight) {
        day++;
        totalHeight += upSpeed;
        if (totalHeight >= desiredHeight) break;
        totalHeight -= downSpeed;
    }
    return day;
    //return Math.ceil((desiredHeight-1) / (upSpeed - downSpeed));
    //return (desiredHeight + upSpeed) / (upSpeed + downSpeed)
    //todo
    //return upSpeed > desiredHeight ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

console.log(growingPlant(100, 10, 910))
console.log(growingPlant(86, 33, 616))
