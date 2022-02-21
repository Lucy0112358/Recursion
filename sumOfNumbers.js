function addToSum(number) {
  let sum = 0;
  if (Math.floor(number) === 0) {
    return sum;
  } else {
    let newNumber = Math.floor(number / 10) * 10;
    let res = number - newNumber;
    sum += res;

    return sum + addToSum(Math.floor(number / 10));
  }
}
console.log(addToSum(2990));
