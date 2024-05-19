const newValue = [1,2,3,4,5,6];

Array.prototype.myReduce = function (callback, initialValue){
    if(Object.prototype.toString.call(callback)!== '[object Function]'){
        throw new TypeError(`${callback} is not a function`)
    }
    let initIndex = arguments.length === 1 ? 1 : 0;
    let acc = arguments.length === 1 ? this[0] : initialValue;
    for (let i = initIndex;i<this.length;i++){
        acc = callback(acc,this[i],i,this)
    }
    return acc;
}

const newValue2 = newValue.myReduce((acc, cur)=>acc+cur);
console.log(newValue2)