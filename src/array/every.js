const arr = [2,3,4,5];

Array.prototype.myEvery = function (callback,thisArg){
    if(Object.prototype.toString.call(callback)!== '[object Function]'){
        return new TypeError('callback must be a function')
    }
    for (let i = 0; i < this.length; i++){
        if(!callback.call(thisArg,this[i],i,this)){
            return false;
        }
    }
    return true;
}

const result = arr.myEvery( item =>item>1);
console.log(result)