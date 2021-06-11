//.concat()
//This adds new elements to the array at the end of the array and returns the array.
var array1 = [1,2,3,4];
array1.concat(); //returns [1,2,3,4], array1 = [1,2,3,4]
array2 = array1.concat([2,3,4]); //returns [1,2,3,4,2,3,4],array1 = [1,2,3,4]
console.log(array1);
console.log(array2);