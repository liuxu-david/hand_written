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
    reject(333);
  }, 1000);
});

function PromiseAllSettled(arr) {
  if (!Array.isArray(arr)) throw new Error("传入promise数组");
  let result = [];
  let flag = 0;
  return new Promise((resolve) => {
    arr.forEach((promiseItem, PromiseIndex) => {
      promiseItem
        .then((data) => {
          result[PromiseIndex] = { status: "fufilled", value: data };
        })
        .catch((err) => {
          result[PromiseIndex] = { status: "rejected", reason: err };
        })
        .finally(() => {
          flag++;
          if (flag === arr.length) {
            resolve(result);
          }
        });
    });
  });
}

PromiseAllSettled([promise1, promise2, promise3])
  .then((data) => {
    console.log("res", data);
  })
  .catch((err) => {
    console.log("err", err);
  });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((data) => {
//     console.log("res", data);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
