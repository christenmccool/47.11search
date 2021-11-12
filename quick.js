/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start, end) { 
  let pivot = arr.shift();
  let before = [];
  let after = [];
  while (arr.length) {
    let next = arr.pop()
    if(next > pivot) after.push(next);
    else before.push(next);
  }
  let pivotInd = before.length;

  while (before.length) {
    arr.push(before.pop());
  }
  arr.push(pivot);
  while (after.length) {
    arr.push(after.pop());
  }
  return pivotInd;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

module.exports = {pivot, quickSort};