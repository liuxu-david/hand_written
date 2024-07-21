// 给定一个数组，给定一个计算结果target，查找出来符合条件的数据索引

function findSum1(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const findIndex = arr.findIndex((item) => item === target - arr[i]);
    if (findIndex !== -1) {
      return [i, findIndex];
    }
  }
  return [];
}

function findSum2(arr, target) {
  const map = new Map();
  arr.forEach((element) => {
    map.set(arr[element], element);
  });
  for (let i = 0; i < arr.length; i++) {
    const findValue = target - arr[i];
    if (map.has(findValue)) {
      return [i, map.get(findValue)];
    }
  }
  return [];
}

console.log(findSum1([8, 2, 6, 5, 4, 1, 3], 7));
console.log(findSum2([8, 2, 6, 5, 4, 1, 3], 7));
