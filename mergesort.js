function mergeSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);
  let i = 0;
  let j = 0;
  let k = start;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

function main() {
  let arr = [3, 2, 1, 13, 8, 5, 0, 1];
  mergeSort(arr, 0, 7);
  console.log(arr);
  let arr2 = [105, 79, 100, 110];
  mergeSort(arr2, 0, 3);
  console.log(arr2);
}

main();
