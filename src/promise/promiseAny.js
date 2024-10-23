const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(111);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222);
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(333);
  }, 1000);
});

// promise.any返回第一个成功的，全部失败才返回失败
function PromiseAny(arr) {
  if (!Array.isArray(arr)) throw new Error("传入promise数组");
  let flag = 0;
  const errResult = { errors: [] };
  return new Promise((resolve, reject) => {
    arr.forEach((promsieItem, promiseIndex) => {
      promsieItem
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          flag++;
          errResult.errors[promiseIndex] = err;
          if (flag === arr.length) {
            reject(errResult);
          }
        });
    });
  });
}
PromiseAny([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.any([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
