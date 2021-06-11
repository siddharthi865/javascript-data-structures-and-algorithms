/*.splice(begin,size,element1,element2…)
This helper function returns and changes the contents of an array by removing existing
elements and/or adding new elements.
.splice() takes three parameters: the beginning index, the size of things to be
removed, and the new elements to add. New elements are added at the position
specified by the first parameter. It returns the removed elements.
*/

var array1 = [1,2,3,4];
console.log(array1.splice());
console.log(array1); //returns [], array1 = [1,2,3,4]
console.log(array1.splice(1,2)); //returns [2,3], array1 = [1,4]

/*This example demonstrates removal. [2,3] was returned because it selected two
items starting from an index of 1.*/
var array2 = [1,2,3,4];
array2.splice(); //returns [], array1 = [1,2,3,4]
array2.splice(1,2,5,6,7); //returns [2,3],array1 = [1,5,6,7,4]
console.log(array2);

/*Anything (any object type) can be added to the array. This is the beauty (and odd part) of JavaScript.*/
var array3 = [1,2,3,4];
console.log(array3.splice(1,2,[5,6,7]));
console.log(array3); //returns [2,3], array1 = [1,[5,6,7],4]
array4 = [1,2,3,4];
console.log(array4.splice(1,2,{'ss':1})); //returns [2,3], array1 = [1,{'ss':1},4]
console.log(array4);

/*.splice() is, worst case, O(n). Similarly to copying, if the range specified is the whole array, each n item has to be removed.*/