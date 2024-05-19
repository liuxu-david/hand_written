const arr = [1,2,3,4,5,6];

Array.prototype.myForEach = function(callback,thisArg){
    if(Object.prototype.toString.call(callback) !== '[object Function]'){
        return new TypeError(callback + 'is not a function');
    }
    for (let i = 0; i < this.length; i++){
        callback.call(thisArg,this[i],i,this)
    }
}

arr.myForEach((item, index) =>{
    console.log(item, index)
})