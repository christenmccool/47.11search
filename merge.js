function merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j] || j===arr2.length) {
      newArr.push(arr1[i]);
      i++
    } else {
      newArr.push(arr2[j]);
      j++
    }
  }
  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort};