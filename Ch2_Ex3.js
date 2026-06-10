/*
Exercise 2-3: Try out each of the methods listed in the 'Other Useful String Methods' section. Make sure you test some
edge cases, or situations where you call them with unusual input values. For example, what happens if you give the
'repeat' method a count of '0' or '-1'.
 */

const str = "TesT TesT";

console.log(str.toLowerCase());  // Returns: 'test test'.
console.log(str.includes("es"));  // Returns: true.
console.log(str.includes("ee"));  // Returns: false.
console.log(str.padStart(25, "abc"));  // Returns: 'abcabcabcabcabcaTesT TesT'.
console.log(str.repeat(5));  // Returns: 'TesT TesTTesT TesTTesT TesTTesT TesTTesT TesT'


// Edge cases using a numeric value.
const edge = 1;

console.log(edge.toLowerCase());  // TypeError.
console.log(edge.includes("es"));  // TypeError.
console.log(edge.includes("ee"));  // TypeError.
console.log(str.padStart(0, "abc"));  // Returns: original string as length of string is already longer than the pad arg.
console.log(str.padStart(-1, "abc"));  // Returns: original string as length of string is already longer than the pad arg.
console.log(str.repeat(2.5));  // Returns: 'TesT TesTTesT Test'. Prints 'str' twice, as floats are 'floored' to the nearest integer.
