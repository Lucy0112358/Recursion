function areAllOdd(number) {
  if (number % 2 === 0) {
    return false;
  }
  if (Math.floor(number / 10) === 0) {
    return true;
  }
  return areAllOdd(Math.floor(number / 10));
}
console.log(areAllOdd(1193313));
