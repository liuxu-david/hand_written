function findValue(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

function findValue2(arr) {
  const newSet = new Set();
  const result = [];
  for (let item of arr) {
    if (newSet.has(item)) {
      result.push(item);
    } else {
      newSet.add(item);
    }
  }
  return result;
}

console.log(findValue([1, 2, 2, 3, 4, 5, 6, 7, 8]));
console.log(findValue2([1, 2, 2, 3, 4, 5, 6, 7, 8]));
