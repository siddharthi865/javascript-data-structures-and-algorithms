function selectionSort(items) {
  var len = items.length,min;
  
  for (var i=0; i < len; i++){
    // set minimum to this position
    min = i;
    //check the rest of the array to see if anything is smaller
    for (j=i+1; j < len; j++){
      if (items[j] < items[min]){
        min = j;
      }
    }
  //if the minimum isn't in the position, swap it
    if (i != min){
    //swap(items, i, min);
    let temp = items[i];
    items[i] = items[min];
    items[min] = temp;
    }
  }
  return items;
}

console.log(selectionSort([6,1,23,4,2,3])); // [1, 2, 3, 4, 6, 23]