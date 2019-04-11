const promise = new Promise((resolve, reject) => {
  //async stuff...
  //..

  setTimeout(() => {
    //resolve(1);
    reject(new Error("gdgfdgdrf"));
  }, 2000);
});

promise
  .then(result => console.log("Result", result))
  .catch(err => console.log("Error: ", err.message));
