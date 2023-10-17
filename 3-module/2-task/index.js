function filterRange(arr, a, b) {
  let filterAttrs = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filterAttrs.push(arr[i]);
    }
  }

  return filterAttrs;
}
