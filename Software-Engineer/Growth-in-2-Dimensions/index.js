'use strict';

function countMax(upRight) {
  // Write your code here
  let min_r = Infinity;
  let min_c = Infinity;

  for (let i = 0; i < upRight.length; i ++) {
    let [r, c] = upRight[i].split(' ').map(Number);

    if (r < min_r) min_r = r;
    if (c < min_c) min_c = c;
  }

  return min_r * min_c;
}