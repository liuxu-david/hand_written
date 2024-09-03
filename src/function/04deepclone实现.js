// 深拷贝实现
function deepClone(obj) {
  if (!(obj instanceof Object)) {
    throw new TypeError("请传入复杂数据类型");
  }

  return Object.keys(obj).reduce((acc, cur) => {
    // 如果值是数组
    if (Object.prototype.toString.call(obj[cur]) === "[object Array]") {
      acc[cur] = [...obj[cur]];
    } else if (typeof obj[cur] === "object" && obj[cur] !== null) {
      // 如果是对象
      acc[cur] = deepClone(obj[cur]);
    } else {
      // 属性值为基本数据类型
      acc[cur] = obj[cur];
    }
    return acc;
  }, {});
}

const obj1 = { a: 1, b: { c: 2 }, d: [99, 98] };
const obj2 = deepClone(obj1);
obj1.b.c = 5;
obj1.d = [90, 91, 92];
console.log(obj2);
