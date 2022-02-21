function rotateArray(array, N, i, temp) {
  if (i === N) {
    return array.concat(temp);
  } else {
    temp[i] = array[0];
    array.shift();
    return rotateArray(array, N, i + 1, temp);
  }
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 4, 0, []));
