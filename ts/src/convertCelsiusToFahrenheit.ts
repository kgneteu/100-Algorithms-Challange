// The algorithm to convert from Celsius to Fahrenheit is the temperature
// in Celsius times 9/5, plus 32.
//
// You are given a variable celsius representing a temperature in Celsius.
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature
// equivalent to the given Celsius temperature.
// Use the algorithm mentioned above to help convert
// the Celsius temperature to Fahrenheit.
//
//     Example
//
// celsiusToFahrenheit(-30) returns -22;
// celsiusToFahrenheit(-10) returns 14;
// celsiusToFahrenheit(0) returns 32;

export function celsiusToFahrenheit(celsius: number): number {
   return celsius * 9/5 +32;
}

// console.log(celsiusToFahrenheit(-30));
// console.log(celsiusToFahrenheit(-10));
// console.log(celsiusToFahrenheit(0));
