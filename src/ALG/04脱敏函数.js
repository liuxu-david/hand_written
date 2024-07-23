function formatAddress(address) {
  const length = address.toString().length;
  if (length <= 1) {
    return address;
  } else if (length <= 4) {
    return "*" + address.toString().slice(1);
  } else if (length <= 9) {
    return address.toString().slice(0, 2) + "***" + address.toString().slice(5);
  } else if (length > 10) {
    return (
      address.toString().slice(0, length - 5) +
      "***" +
      address.toString().slice(length - 2, length)
    );
  } else {
    return address;
  }
}
console.log(formatAddress("南"));
console.log(formatAddress("南山"));
console.log(formatAddress("南山区科技二路"));
console.log(formatAddress("南山区海天二路68爱德华小区"));
