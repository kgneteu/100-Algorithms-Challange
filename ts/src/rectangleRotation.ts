// A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.
//
//     How many points with integer coordinates are located inside the given rectangle (including on its sides)?
//
//     Example
//
//     For a = 6 and b = 4, the output should be
// solution(a, b) = 23.
//
// The following picture illustrates the example, and the 23 points are marked green.
//
//
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer a
//
// A positive even integer.
//
//     Guaranteed constraints:
//     2 ≤ a ≤ 50.
//
//     [input] integer b
//
// A positive even integer.
//
//     Guaranteed constraints:
//     2 ≤ b ≤ 50.
//
//     [output] integer
//
// The number of inner points with integer coordinates.

//todo rethink refactor
export function rectangleRotation(a: number, b: number): number {
    let p = 0
    let radius = Math.pow(a / 2, 2) + Math.pow(b / 2, 2)
    radius = (Math.ceil(Math.pow(radius, .5))) | 0

    function rad(d: number) {
        return d * (Math.PI / 180);
    }

    for (let i = -radius; i < radius + 1; i++) {
        for (let j = -radius; j < radius + 1; j++) {
            let x = i * Math.cos(rad(-45)) - j * Math.sin(rad(-45))
            let y = i * Math.sin(rad(-45)) + j * Math.cos(rad(-45))
            if ((x >= -a / 2) && (x <= a / 2)
                && (y >= -b / 2) && (y <= b / 2)) p++;
        }
    }
    return p;
    //
    // let pointsA = Math.floor(Math.sqrt(a * a / 2)),
    //     pointsB = Math.floor(Math.sqrt(b * b / 2));
    // return (pointsA * pointsB + Math.floor((pointsA + pointsB) / 2)) * 2 + 1;
}

//console.log(rectangleRotation(6, 4))
