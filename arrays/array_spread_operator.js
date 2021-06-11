/*Spread Operator
The spread operator, denoted by three periods (...), is used to expand arguments where
zero arguments are expected.*/
function addFourNums(a, b, c, d) {
  return a + b + c + d;
}

var numbers = [1, 2, 3, 4];
console.log(addFourNums(...numbers)); // 10

/*Both the Math.max and Math.min functions take an unlimited number of parameters,
so you can use the spread operator for the following operations.*/

//To find the maximum in an array, use this:
var array1 = [1,2,3,4,5];
Math.max(array1); // 5

//To find the minimum in an array, use this:
var array2 = [3,2,-123,2132,12];
Math.min(array2); // -123