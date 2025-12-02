let a: number[] = [1, 2];
let b: string[] = ['1', '2'];
let c: boolean[] = [true];

type Age = number;

type Player = {
  readonly name: string;
  age?: Age;
};

const sepi: Player = {
  name: 'sepi',
};
const momo: Player = {
  name: 'momo',
};
sepi.name;

if (sepi.age && sepi.age < 10) {
}

// function PlayerMaker(name: string): Player {
//   return {
//     name,
//   };
// }

const PlayerMaker = (name: string): Player => ({ name });

const elliot = PlayerMaker('elliot');
elliot.age = 12;
sepi.name = 'sepi2';

const numbers: readonly number[] = [1, 2, 3];
numbers.push(4);

const names: readonly string[] = ['1', '2'];
