//Use ES6 whenever possible.

/* 
CHALLENGE 2
Answer following Qustions:
1. Why no error is generated after the line 14?
2. Why after the line 19 TypeError is generated?
Change one line of code so, that error will go away.
Don't change lines 14, 19.
*/

"use strict";
const arr = [1, 2];
//We can still push to the const arr, it just cannot be re-assigned. We can still manipulate it.
arr.push(3);
console.log(arr);
// [1, 2, 3]


// arr = [1, 2, 3, 4];
// Cannot reassign to a const, so we will simply push again

arr.push(4);
// BEFORE: Uncaught TypeError:
// Assignment to constant variable.
// AFTER: No error
console.log(arr);
// [1, 2, 3, 4]
