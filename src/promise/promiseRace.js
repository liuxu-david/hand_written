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

// 不管成功失败，返回最先执行的promise （竞赛）
function PromiseRace(arr) {
  if (!Array.isArray(arr)) throw new Error("需传入promise数组");
  return new Promise((resolve, reject) => {
    arr.forEach((PromiseItem) => {
      PromiseItem.then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  });
}

PromiseRace([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("err", err);
  });
