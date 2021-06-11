/*Map
The map function applies passed function transformation to every element in the array
and returns a new array with those transformations applied.
For example, you can multiply every element by 10, as shown here:*/
array1 = [1,2,3,4,5,6,7];
array2 = array1.map(function (value){
  return value*20;
});

console.log(array2);