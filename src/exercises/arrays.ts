export const t = [1, -1, 3];

t.push(5);

console.log(t.length); // Se imprime 4
console.log(t[1]); // -1 es impreso

t.forEach((value) => {
  console.log(value); // se imprimen los números 1, -1, 3, 5, cada uno en la línea propia
});

const t2 = t.concat(5);

console.log(t); // [1, -1, 3] es impreso
console.log(t2); // [1, -1, 3, 5] es impreso

const m1 = t.map((value) => value * 2);
console.log(m1); // [2, 4, 6] es impreso

const m2 = t.map((value) => '<li>' + value + '</li>');
console.log(m2);
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] es impreso

const [first, second, ...rest] = t;

console.log(first, second); // 1, 2 es impreso
console.log(rest);
