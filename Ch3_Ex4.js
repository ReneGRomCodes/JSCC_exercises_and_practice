/*
Exercise 3-4: Try changing the 'value' property of 'quarter' and check to see if that change is reflected in the 'change'
array. Now, change the weight of 'change[0]'. Do you see that change in 'quarter' as well?
 */

let penny = {name: "Penny", value: 1, weight: 2.5 };
let nickel = {name: "Nickel", value: 5, weight: 5 };
let dime = {name: "Dime", value: 10, weight: 2.268 };
let quarter = {name: "Quarter", value: 25, weight: 5.67 };

let change = [quarter, quarter, dime, penny, penny, penny,];

// Show base value for 'quarter'.
console.log(quarter.value);
console.log(change[0].value);

// Change and show value for 'quarter'.
quarter.value = 20;
console.log(quarter.value);
console.log(change[0].value);

// Change and show weight for object at 'change[0]'.
change[0].weight = 6;
console.log(quarter.weight);
console.log(change[0].weight);


// Answer: Yes, the changes made to the object are shown regardless if the object is changes directly via a variable or
// via it's entry in the 'change' array.
