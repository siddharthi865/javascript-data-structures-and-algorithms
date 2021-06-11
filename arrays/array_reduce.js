/*Reduce
The reduce function combines all the elements in the array into one value using a
passed transformation function parameter.
For example, this adds all the elements:
*/
var sum = [0,1,2,3,4].reduce( function (prevVal, currentVal, index,
array) {
  return prevVal + currentVal;
});

console.log(sum); // prints 10

/*This function also can take initialValue as its second argument, which initializes
the reduce value. For example, providing an initialValue of 1 in the previous example
will yield 11, as shown here:
*/
var sum = [0,1,2,3,4].reduce( function (prevVal, currentVal, index,
array) {
  return prevVal + currentVal;
}, 1);
console.log(sum); // prints 11