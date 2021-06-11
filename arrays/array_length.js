//.length Property
//The .length property returns the size of the array. Changing this property to a lower size can delete elements from the array.
var array1 = [1,2,3,4];
console.log(array1.length); //prints 4
array1.length = 3;
console.log(array1); // array1 = [1,2,3]