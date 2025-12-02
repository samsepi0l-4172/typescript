// type SuperPrint = {
//   <T>(arr: T[]): void;
// };

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((item) => {
//     console.log(item);
//   });
// };

// superPrint([1, 2, 3, 4]);
// superPrint([true, false, true]);
// superPrint(['a', 'b', 'c']);
// superPrint([1, 2, true, false]);

type SuperPrint = {
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(['a', 'b', 'c']);
const d = superPrint([1, 2, true, false]);

console.log(a, b, c, d);
