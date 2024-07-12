# Growth in 2 Dimensions
Start with an infinite two dimensional grid filled with zeros, indexed from _(1,1)_ at the bottom left corner with coordinates increasing toward the top and right. Given a series of coordinates _(r,c)_, where _r_ is the ending row and _c_ is the ending column, add _1_ to each element in the range from _(1,1)_ to _(r,c)_ inclusive. Once all coordinates are processed, determin how many cells contain the maximal value in the grid.

### Example
_upRight = ["1 4", "2 3", "4 1"]_

The two space-separated integers within each string represent _r_ and _c_ respectively. The follwoing diagrams show each iteration starting at zero. The maximal value in the grid is _3_, and there is _1_ occurrence at cell _(1,1)_.

### Function Description
Complete the function _countMax_ in the editor below.

countMax has the following parameter(s):
  _string upRight[n]_: an aray of strings made of two space-separated integers, _r_ and _c_.

### Return
  _long_: the number of occurrneces of the final grid's maximal element.

### Constraints
- 1 <= n <= 100
- 1<= number of rows, number of columns <= 10e6

```
// JavaScript

'use strict';

function countMax(upRight) {
  // Write your code here
}
```