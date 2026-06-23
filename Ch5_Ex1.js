/*
Exercise 5-1: Rewrite the 'sayHello' function so it returns the 'Hello, ${name]!' greeting instead of logging it. Then
write some code to use the returned greeting. For example, apply the 'toUpperCase' string method to convert the greeting
to all caps.
 */

// Original function.
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}


// Rewritten function.
function sayHelloReturn(name) {
    return `Hello, ${name}!`;
}

const name = sayHelloReturn("Your Name");

console.log(name);
console.log(name.toUpperCase());
console.log(name.split(" "));
