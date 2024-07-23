console.log(1);

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(2);
  }, 0);
  console.log(3);
}, 0);

new Promise((resolve) => {
  for (let i = 0; i <= 1000; i++) {
    if (i === 1000) {
      resolve();
    }
  }
  console.log(4);
}).then(() => {
  console.log(5);
});

console.log(6);

//1 4 6 5 3 2
