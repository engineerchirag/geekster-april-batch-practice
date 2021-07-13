// Prints "The Fails" twice
// var p = new Promise((resolve, reject) => {
//   reject(Error("The Fails!"));
// });
// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));

// This throws Error
// var p = new Promise((resolve, reject) => {
//   return Promise.reject(Error("The Fails!"));
// });
// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));

// Prints The Fails & undefined
// var p = new Promise((resolve, reject) => {
//   reject(Error("The Fails!"));
// })
//   .catch((error) => console.log(error))
//   .then((error) => console.log(error))

// Prints "The Fails" once
// var p = new Promise((resolve, reject) => {
//   reject(Error("The Fails!"));
// })
//   .catch((error) => console.log(error.message))
//   .catch((error) => console.log(error.message));

// Nothing should get printed
// new Promise((resolve, reject) => {
//   resolve("Success!");
// })
//   .then(() => {
//     throw Error("Oh noes!");
//   })
//   .catch((error) => {
//     return "actually, that worked";
//   })
//   .catch((error) => console.log(error.message));

// Prints SUCCESS!
// Promise.resolve("Success!")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Prints SUCCESS! twice
// Promise.resolve("Success!")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then(console.log);

// Prints The fails!
// Promise.resolve("Success!")
//   .then(() => {
//     throw Error("Oh noes!");
//   })
//   .catch((error) => {
//     return "actually, that worked";
//   })
//   .then((data) => {
//     throw Error("The fails!");
//   })
//   .catch((error) => console.log(error.message));

// Prints Error1 Success4
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }
// let promise = job();
// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 4");
//   });

// Prints success error Error caught
// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }
// let promise = job(true);
// promise
//   .then(function (data) {
//     console.log(data);
//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "Error caught";
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Prints success Defeat  error Error caught Success: test
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }
// let promise = job(true);
// promise
// .then(function(data) {
//     console.log(data);
//     return job(true);
// })
// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }
//     return job(true);
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log(error);
//     return job(false);
// })
// .then(function(data) {
//     console.log(data);
//     return job(true);
// })
// .catch(function(error) {
//     console.log(error);
//     return 'Error caught';
// })
// .then(function(data) {
//     console.log(data);
//     return new Error('test');
// })
// .then(function(data) {
//     console.log('Success:', data.message);
// })
// .catch(function(data) {
//     console.log('Error:', data.message);
// });
