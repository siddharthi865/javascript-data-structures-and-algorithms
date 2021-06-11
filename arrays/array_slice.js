//.slice(begin,end)
//This helper function returns a portion of an existing array without modifying the array.
//.slice() takes two parameters: the beginning index and the ending index of the array.
var array1 = [1,2,3,4];
console.log(array1.slice(1,2)); //returns [2], array1 = [1,2,3,4]
console.log(array1.slice(2,4)); //returns [3,4], array1 = [1,2,3,4]

//If only the beginning index is passed, the ending will be assumed to be the maximum
//index.
console.log(array1.slice(1)); //returns [2,3,4], array1 = [1,2,3,4]
console.log(array1.slice(1,4)); //returns [2,3,4], array1 = [1,2,3,4]

/*If nothing is passed, this function simply returns a copy of the array. It should be
noted that array1.slice() === array1 evaluates to false. This is because although the
contents of the arrays are the same, the memory addresses at which those arrays reside
are different.*/
console.log(array1.slice()); //returns [1,2,3,4], array1 = [1,2,3,4]

/*This is useful for copying an array in JavaScript. Remember that arrays in JavaScript
are reference-based, meaning that if you assign a new variable to an array, changes to
that variable apply to the original array.
*/
var array3 = [1,2,3,4],
array4 = array3;

array3 // [1,2,3,4]
array4 // [1,2,3,4]

array4[0] = 5;

console.log(array3); // [5,2,3,4]
console.log(array4); // [5,2,3,4]

/*
The changing element of array2 changed the original array by accident because it is
a reference to the original array. To create a new array, you can use .from().
 */

var array5 = [1,2,3,4];
var array6 = Array.from(array1);

array5 // [1,2,3,4]
array6 // [1,2,3,4]

array6[0] = 5;

console.log(array5) // [1,2,3,4]
console.log(array6) // [5,2,3,4]