/*
Exercise 2-2: Use the *= operator to see the power of compound interest. If you have $100 and you gain 8% interest every
year, how many years will it take to double your money?

NOTE: the exercise in the book is meant to be solved in via the console by repeatedly entering the same input. I added
a function that returns the result in addition to the code the book actually expects.
 */

let savings = 100;
savings *= 1.08;  // Repeat this one in the console until the money has doubled.


// Function solution. Note that I kept 'savings' as an argument name. Not good practice because that one already exists
// in the outer scope, but I left it here make the logic of the function clearer... it's just an exercise, not production
// code, so don't get your knickers in a twist here ;)
function doubledSavings(savings, percentInterest) {
    let savingsPlusInterest = savings;
    let year = 0;
    const interestMultiplicator = percentInterest / 100 + 1;

    while (savingsPlusInterest < savings * 2) {
        savingsPlusInterest *= interestMultiplicator;
        year++
    }

    return year;
}
