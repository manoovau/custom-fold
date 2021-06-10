/* Challenge: Implement fold function.

Fold funtion inputs:
 - sequence of type A
 - initial value of type B
 - function (A, B) => B

Fold function output:
 - output value of type B

Restrictions:
    Don't use fold function => reduce() || array.reduce(func, initval)

*/

import assert from "assert";

function taktileFlod<ItemType, InitType>(
  array: ItemType[],
  init: InitType,
  fun: (acc: InitType, item: ItemType) => InitType
): InitType {
  let acc = init;
  array.forEach((item) => {
    acc = fun(acc, item);
  });
  return acc;
}

assert.deepStrictEqual(
  taktileFlod([1, 2, 3, 4], 1, (a, b) => a + b),
  [1, 2, 3, 4].reduce((a, b) => a + b, 1)
);
assert.deepStrictEqual(
  taktileFlod([1, 2, 3, 4], 1, (a, b) => a - b),
  [1, 2, 3, 4].reduce((a, b) => a - b, 1)
);
assert.deepStrictEqual(
  taktileFlod([1, 2, 3, 4], 1, (a, b) => a * b),
  [1, 2, 3, 4].reduce((a, b) => a * b, 1)
);
assert.deepStrictEqual(
  taktileFlod([1, 2, 3, 4], 1, (a, b) => a / b),
  [1, 2, 3, 4].reduce((a, b) => a / b, 1)
);
assert.deepStrictEqual(
  taktileFlod([1, 2, 3, 4], 2, (a, b) => a ** b),
  [1, 2, 3, 4].reduce((a, b) => a ** b, 2)
);
assert.deepStrictEqual(
  taktileFlod(["f", "a", "v", " ", "t", "e", "c", "h"], "my ", (a, b) => a + b),
  ["f", "a", "v", " ", "t", "e", "c", "h"].reduce((a, b) => a + b, "my ")
);
assert.deepStrictEqual(
  taktileFlod([1, 2, 3, 4, 5], 0, (a, b) => Math.max(a, b)),
  [1, 2, 3, 4, 5].reduce((a, b) => Math.max(a, b))
);
assert.deepStrictEqual(
  taktileFlod([{ x: 1 }, { x: 2 }, { x: 4 }], { x: 0 }, (a, b) => ({
    x: a.x + b.x,
  })),
  [{ x: 1 }, { x: 2 }, { x: 4 }].reduce((a, b) => ({ x: a.x + b.x }))
);
