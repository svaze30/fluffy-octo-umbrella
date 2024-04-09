function fibs(n) {
  if (n <= 0) return [];
  if (n == 1) return [0];

  let arr = new Array(n);
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

function fibHelper(n, arr) {
  if (n == 0) {
    arr[0] = 0;
  } else if (n == 1) {
    arr[0] = 0;
    arr[1] = 1;
  } else {
    fibHelper(n - 1, arr);
    arr[n] = arr[n - 1] + arr[n - 2];
  }
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n <= 1) return [0];
  let arr = new Array(n);
  fibHelper(n - 1, arr);
  return arr;
}

function test(start, end) {
  for (let i = start; i < end; i++) {
    console.log(fibs(i));
    console.log(fibsRec(i));
  }
}
function main() {
  let n = 2;
  // console.log(fibs(n));
  // console.log(fibsRec(n));
  test(0, 10);
}

main();
