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
  <T, V>(arr: T[], b: V): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], 'x');
const b = superPrint([true, false, true], 1);
const c = superPrint(['a', 'b', 'c'], false);
const d = superPrint([1, 2, true, false], []);

console.log(a, b, c, d);
