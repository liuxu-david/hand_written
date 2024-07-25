function debounce(fn, delay, immediate = false) {
  let time = null;
  return function (...args) {
    if (immediate && !time) {
      fn.apply(this, args);
    }
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
