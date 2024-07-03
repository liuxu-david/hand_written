// 数组去重
const arr = [2, 1, 3, 54, 2, 5, 1, 5, 3, 6];

// 第一种，使用Set去重
const newArr1 = [...new Set(arr)];
console.log(newArr1);

// 第二种 for循环/for...in结合includes
const newArr2 = [];
arr.forEach((item) => {
  if (!newArr2.includes(item)) {
    newArr2.push(item);
  }
});
console.log(newArr2);

// 第三种 for循环/for...in结合indexof
const newArr3 = [];
for (let item in arr) {
  if (newArr3.indexOf(arr[item]) === -1) {
    newArr3.push(arr[item]);
  }
}
console.log(newArr3);

// 第四种 filter结合indexof
const newArr4 = arr.filter((item, index) => index === arr.indexOf(item));
console.log(newArr4);

// 第5种 reduce结合includes
const newArr5 = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(newArr5);

// 数组降维
// 第一种方法使用flat
const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
const formatArr1 = arr1.flat(Infinity);
console.log(formatArr1);

// 第二种方法使用reduce
const formatArr2 = arr1.reduce((acc, cur) => {
  if (Array.isArray(cur)) {
    acc.push(...cur);
  } else {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(formatArr2);

// 第三种方法使用递归
function formatArr(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...formatArr(item));
    } else {
      result.push(item);
    }
  });
  return result;
}
const formatArr3 = formatArr(arr1);
console.log(formatArr3);
