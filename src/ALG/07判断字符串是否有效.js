const map = new Map();
map.set("(", ")");
map.set(")", "(");
map.set("{", "}");
map.set("}", "{");
map.set("[", "]");
map.set("]", "[");

function isValid(str) {
  return str.split("").every((item) => str.includes(map.get(item)));
}

console.log(isValid("[]")); //true
console.log(isValid("()")); //true
console.log(isValid("{[()]}")); //true
console.log(isValid("(")); //false
console.log(isValid("{(]}")); //false
