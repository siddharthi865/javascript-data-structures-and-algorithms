/*String Comparison
Most programming languages have a function that allows you to compare strings. In
JavaScript, this can be done simply by using less-than and greater-than operators.
*/
var a = 'a';
var b = 'b';
console.log(a < b); // prints 'true'

/*This can be really useful for comparing strings when sorting algorithms.
However, if you are comparing two strings of different lengths, it starts comparing from the start of the string until the length of the smaller string.*/

var a = 'add';
var b = 'b';

console.log(a < b); // prints 'true'

/*In this example, a and b are compared. Since a is smaller than b, a < b evaluates to true.*/

var a = 'add';
var b = 'ab';
console.log(a < b); // prints 'false'

/*In this example, after 'a' and 'b' are compared, 'd' and 'b' are compared.
Processing cannot continue because everything in 'ab' has been looked at. This is the same as comparing 'ad' with 'ab'.*/

console.log('add'<'ab' == 'ad'<'ab'); // prints 'true'