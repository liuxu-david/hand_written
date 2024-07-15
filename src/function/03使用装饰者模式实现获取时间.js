function addZero(str) {
  return str.toString().padStart(2, "0");
}

function getTime(currentTime) {
  const year = currentTime.getFullYear();
  const month = addZero(currentTime.getMonth() + 1);
  const day = addZero(currentTime.getDate());
  const hour = addZero(currentTime.getHours());
  const minute = addZero(currentTime.getMinutes());
  const second = addZero(currentTime.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

console.log(getTime(new Date()));
