function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    if (!swapped){
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          swapped = true;
        }
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;