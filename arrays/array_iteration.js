//1. Using for loop
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( var i=0, len=array1.length; i<len; i++ ) {
  console.log(array1[i]);
}

//using while loop
var array2 = [1, 2, 3, 4, 5];
var i = 0, len = array2.length;

while (i < len) {
  console.log(array2[i]);
  i++;
}

//3. using for/in loop
var array3 = ['all','cows','are','big'];

for (var index in array3) {
  console.log(index);
  console.log(array3[index]);
}

//4. using for/of loop
var array4 = [1, 2, 3, 4, 5, 6, 7];
for (var element of array4) {
  console.log(element);
}

//5. using for each loop
var array5 = ["Siddharth","Sunariya","is","a","good","guy"];
array5.forEach( function (element, index){
  console.log(element);
});

array5.forEach( function (element, index){
  console.log(array5[index]);
});