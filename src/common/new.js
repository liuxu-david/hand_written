function myNew(Constructor, ...args) {
  // 创建空对象
  const obj = {};
  // 将构造函数原型赋值给obj原型
  obj.__proto__ = Constructor.prototype;

  // 绑定this
  const result = Constructor.apply(obj, args);

  // 返回值
  return obj;
}

// 使用
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name;
  };
}

const person = myNew(Person, "david", 18);
const person2 = myNew(Person, "frank", 25);

console.log(person);
console.log(person.getName());
console.log(person2.getName());
