function bubbleSort(array) {
  for (var i=0, arrayLength = array.length; i<arrayLength; i++) {
    for (var j=0; j<=i; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSort([6,1,2,3,4,5,50,80,90,32,40,23,21]));