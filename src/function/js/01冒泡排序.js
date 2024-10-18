function bubbleSort(arr) {
  let number = arr.length - 1;
  while (number) {
    for (let i = 0; i < number; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    number--;
  }
  return arr;
}

const data = [34, 4, 2, 32, 53, 12, 55, 1, 45, 99, 65];
console.log(bubbleSort(data));
