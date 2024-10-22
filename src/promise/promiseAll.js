const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(111);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333);
  }, 1000);
});

// 返回全部promise成功执行的数组，如果有失败，直接返回失败结果
function PromiseAll(arr) {
  let result = [];
  let num = 0;
  return new Promise((resolve, reject) => {
    arr.forEach((promiseItem, promiseIndex) => {
      promiseItem
        .then((data) => {
          result[promiseIndex] = data;
          num++;
          if (num === arr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

PromiseAll([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
// Promise.all([promise1, promise2, promise3]).then((data) => {
//   console.log(data);
// });
