/*
Exercise 4-1: JavaScript to simulate a coin toss. Generate a random number between 0 and 1 with 'Math.random()', and
write an 'if...else' statement that will log "heads" if the number is less than 0.5 or "tails" otherwise.
 */

if (Math.random() < 0.5) {
    console.log("heads");
} else {
    console.log("tails");
}
