/*Filter
The filter function returns only those elements of the array that meet a passed
condition parameter. Again, this does not change the original array.
For example, this filters elements greater than 100:
*/
var array1 = [100,2003,10,203,333,12];
var array2 = array1.filter(function (value){
  return value > 100;
});

console.log(array2);