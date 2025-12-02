// function add(a: number, b: number) {
//   return a + b;
// }

// const add = (a: number, b: number) => a + b;

// type Add = {
//   (a: number, b: number): number;
//   (a: number, b: string): number;
// };

// const add: Add = (a, b) => {
//   if (typeof b === 'string') return a;
//   return a + b;
// };

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (typeof c === 'number') return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
