/*
Exercise 4-2: Much like looping over the elements in an array, it's also possible to use 'for...of' to loop over the
letters in a string. Write a 'for...of' loop that will loop over your name, printing each letter on a separate line, like
this:
N
i
c
k
 */

const name = "Yourname";

for (const letter of name) console.log(letter);


/*
Exercise 4-3: Use the 'entries' method with a 'for...of' loop to print something like the following based on a string of
your name:
N 0
i 1
c 2
k 3
 */

const nameArr = name.split("");

for (const [index, letter] of nameArr.entries()) console.log(`${letter} ${index}`);


/*
Rewrite the code from the previous problem using a standard for-loop.
 */

for (let i = 0; i < name.length; i++) console.log(`${name[i]} ${i}`);
