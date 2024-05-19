const arr = [1,2,[3,4,[5,6]]];

Array.prototype.myFlat = function (deep) {
    deep = arguments.length === 0 ? 1 : deep;
    let result = [];
    for (let i= 0; i < this.length; i++){
        if(Array.isArray(this[i])&&deep > 0){
            result = result.concat(this[i].myFlat(deep-1))
        }else {
            result.push(this[i]);
        }
    }
    return result;
}

const result = arr.flat(1);
console.log(result)