// Promise all settled
const promise1 = new Promise((_, reject) => reject("Reject"))

const promise2 = new Promise((resolve,_) => resolve("Resolve"))

const promise3 = new Promise((resolve,_) => resolve("Resolve"))

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response))