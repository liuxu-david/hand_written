const arr = [2,3,4,5];

Array.prototype.mySome = function(callback,thisArg){
    if(Object.prototype.toString.call(callback)!=='[object Function]'){
        return new TypeError('callback must be a function')
    }
    for (let i= 0; i < this.length; i++){
        if(callback.call(thisArg,this[i],i,this)){
            // 一旦找到满足条件的元素，则返回true
            return true
        }
    }
    return false;
}

const result = arr.mySome(item=>item>4)
console.log(result)