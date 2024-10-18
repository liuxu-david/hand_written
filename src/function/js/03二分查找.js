// 适用于有序数组
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    if (target === arr[midIndex]) {
      return `查找的值的索引为${midIndex}`;
    } else if (arr[midIndex] > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return "查找失败";
}
const data = [2, 4, 12, 32, 34, 45, 53, 55, 65, 99];
console.log(binarySearch(data, 55));
