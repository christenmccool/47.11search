// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let val = arr[i];
//     let j = i-1;

//     while (arr[j] > val && j >= 0) {
//       arr[j+1] = arr[j];
//       j--;
//     }
//     arr[j+1]= val;
//   }
//   return arr;
// }

function findFloor(arr, val) {
  let floor = -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start)/2);
    if (val >= arr[mid]) {
      floor = mid;
      start = mid+1;
    } else {
      end=mid-1;
    }   
  }
  return floor;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    let ind = findFloor(arr.slice(0,i), val) + 1;
    for (let j = i-1; j >= ind; j--) {
      arr[j+1] = arr[j];
    }
    arr[ind] = val; 
  }
  return arr;
}

module.exports = {findFloor, insertionSort};

// module.exports = findFloor;

