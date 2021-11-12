function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let newMinInd;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        newMinInd = j;
      }
    }
    if (newMinInd) {
      let temp = arr[i];
      arr[i]= arr[newMinInd];
      arr[newMinInd] = temp;
    }
  }
  return arr;
}

module.exports = selectionSort;