function throttle(func, wait) {
  return function (...args) {
    let lastCallTime = 0;
    // 获取当前函数的调用时间
    const currentTime = Date.now();
    if (currentTime - lastCallTime > wait) {
      func.apply(this, args);
      lastCallTime = currentTime;
    }
  };
}
