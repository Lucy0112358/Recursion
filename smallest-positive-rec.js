const theBiggestInt = 9007199254740991;
function minimalPositive(array, i = array.length) {
  if (i === 1) return array[0];
  i--;
  if (array[0] < 0) {
    array[0] = theBiggestInt;
  }
  if (array[i] < 0) {
    array[i] = theBiggestInt;
  }
  if (Math.min(array[i], minimalPositive(array, i)) === theBiggestInt) {
    return -1;
  }
  return Math.min(array[i], minimalPositive(array, i));
}

console.log(minimalPositive([-5, -9, -111, -1000, -7]));
