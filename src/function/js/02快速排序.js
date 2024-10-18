function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("传入正确数组");
  }
  if (arr.length < 2) return arr;
  const left = [];
  const right = [];
  const flagValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] < flagValue ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), flagValue, ...quickSort(right)];
}

const data = [34, 4, 2, 32, 53, 12, 55, 1, 45, 99, 65];
console.log(quickSort(data));
