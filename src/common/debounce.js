// 防抖函数

function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

const func = debounce((a) => {
  console.log(a);
}, 3000);

func(1);
