function findIndex(str) {
  const map = new Map();
  for (let item of str) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex("abcabcde"));
