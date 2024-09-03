Array.prototype.myFlag = function (deep) {
  let step = arguments.length === 1 ? deep : 1;
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && step > 0) {
      result = result.concat(this[i].myFlag(step - 1));
    } else {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, [3, 4, [5]]].myFlag(2));
