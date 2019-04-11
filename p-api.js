// Promise.reolve(1);
// Promise.reject(new Error(''));
// Promise.all([p1, p2]);
// Promise.race([p1, p2]);

const p2 = new Promise(reject => {
  setTimeout(() => {
    console.log("Async operation 2...");
    reject(new Error("fkdjghslkfdjghlsfdkjg"));
  }, 3000);
});

const p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

Promise.race([p2, p1])
  .then(result => console.log(result))
  .catch(err => console.log("Error", err.message));
