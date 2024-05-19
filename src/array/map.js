const demoValue = [2,3,4,5,6];

Array.prototype.myMap = function(callback,thisArg){
    if(Object.prototype.toString.call(callback)!=="[object Function]"){
        throw new TypeError(callback + "must be a function");
    }
    const result = [];
    for (let i = 0; i < this.length; i++){
        result[i] = callback.call(thisArg,this[i],i,this)
    }
    return result;
}

const newValue = demoValue.myMap(item=>item+1);

console.log(newValue)