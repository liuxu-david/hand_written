const arr = [2,3,4,5,6];

Array.prototype.myFind= function(callback,thisArg){
    if(Object.prototype.toString.call(callback) !== '[object Function]'){
        throw new TypeError("callback must be a function")
    }
    for (let i = 0; i < this.length; i++){
        if(callback.call(thisArg,this[i],i,this)){
            return this[i]
        }
    }
}

const value = arr.myFind((item)=>item >9);
console.log(value)