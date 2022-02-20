function arrShift(array, i = 0) {
  if (array.length === 0) {
    return array;
  }
  if (i === array.length - 1) {
    array.length = array.length - 1;
    return array;
  } else {
    array[i] = array[i + 1];
    return arrShift(array, i + 1);
  }
}
let Arr = [6, 78, `n`, 0, 1];
let Empty = [];
console.log(arrShift(Arr));
