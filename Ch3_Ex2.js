/*
Exercise 2-4: Create a new empty array and save it in a variable. Your task is to add the colors of the rainbow ("Red",
"Orange", "Yellow", "Green", "Blue", "Indigo", "Violet") to this array, but with a twist: you must start by adding
'Green', and use 'push' and 'unshift' to add the rest.
 */

const rainbow = [];

rainbow.push("Green");
rainbow.push("Blue");
rainbow.push("Indigo");
rainbow.push("Violet");
rainbow.unshift("Yellow");
rainbow.unshift("Orange");
rainbow.unshift("Red");

console.log(rainbow);
