export const sum = (p1: number, p2: number) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(1, 5);
console.log(result);

const square = (p: number) => {
  console.log(p);
  return p * p;
};

// const square = (p:number) => p * p;

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
// tSquared es ahora [1, 4, 9]

function product(a: number, b: number) {
  return a * b;
}

// const result = product(2, 6)
// result is now 12

const average = function (a: number, b: number) {
  return (a + b) / 2;
};

// const result = average(2, 5);
// result is now 3.5
