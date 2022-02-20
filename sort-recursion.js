function wronglySortedIndex(array, i = array.length) {
  if (Math.min(array[i], array[i - 1]) === array[i]) {
    return i;
  }
  i--;
  if (i === 0) {
    return -1;
  }
  return wronglySortedIndex(array, i);
}
let A = [2, 12, 15, 448, 64];
console.log(wronglySortedIndex(A));
