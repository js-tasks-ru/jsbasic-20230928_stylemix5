function getMinMax(str) {
  const words = str.split(' ');

  let min = Infinity;
  let max = -Infinity;

  for (const word of words) {
    const num = parseFloat(word);

    if (!isNaN(num)) {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
  }

  return { min, max };
}
