const arr = ["david", "frank", "livia"];

Array.prototype.myJoin = function (sep) {
  sep = sep === "" ? "" : sep || ",";
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      result += this[i];
    } else {
      result += this[i] + sep;
    }
  }
  return result;
};

const result = arr.myJoin("");
console.log(result);
