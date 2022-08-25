// function sum(num1, num2) {
//   return num1 + num2;
// }

// function calc(num1, num2, cb) {
//   return cb(num1, num2);
// }

// console.log(calc(4, 3, sum));

// setTimeout(() => {
//   console.log("hola desde JS");
// }, 2 000);

function greeting(name) {
  console.log(`Hola, ${name}`);
}

setTimeout(greeting, 2000, "Enrique");
