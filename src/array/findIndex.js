const arr = ["frank","livia","david","david"];

Array.prototype.myFindIndex = function(callback,thisArg){
    if(Object.prototype.toString.call(callback)!== "[object Function]"){
        return new TypeError("callback must be a function")
    }
    for (let i = 0; i < this.length; i++){
        if(callback.call(thisArg,this[i],i,this)){
            return i
        }
    }
    return  -1;
}

const value = arr.myFindIndex((item)=>item ==="david");
console.log(value)