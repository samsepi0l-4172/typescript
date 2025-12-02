let a: unknown;

// let b = a + 1;
if (typeof a === 'number') {
  let b = a + 1;
}

// let b = a.toUpperCase();
if (typeof a === 'string') {
  let b = a.toUpperCase();
}

function hello(): void {
  console.log('hello');
}

const c = hello();
// c.toUpperCase();

function hello2(): never {
  throw new Error('error');
}

function hello3(name: string | number) {
  if (typeof name === 'string') {
    name;
  }
  if (typeof name === 'number') {
    name;
  } else {
    name;
  }
}
