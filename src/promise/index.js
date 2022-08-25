// const promise = new PromiseRejectionEvent(function (resolve, reject) {
//   resolve("hey");
// });

const cows = 5;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} in the farm`);
  } else {
    reject(`There are no enough cows in the farm`);
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");
  });
