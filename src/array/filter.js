const obj = [{id:1},{id:2},{id:3}];

Array.prototype.myFilter = function (callbackFn,thisArg){
    if(Object.prototype.toString.call(callbackFn)!== '[object Function]'){
        throw new TypeError(`${callbackFn} is not a function`)
    }
    let arr = []
    for (let i = 0; i < this.length; i++){
        if(callbackFn.call(thisArg,this[i],i,this)){
            arr.push(this[i])
        }
    }
    return arr;
}

const result = obj.myFilter(item=>item.id!==2);
console.log(result)