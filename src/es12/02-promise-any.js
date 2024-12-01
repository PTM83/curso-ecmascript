// Promise any - permite observar la primera promesa que se resuelve
const promise1 = new Promise((_, reject) => reject("Reject"))

const promise2 = new Promise((resolve,_) => resolve("Resolve 1"))

const promise3 = new Promise((resolve,_) => resolve("Resolve 2"))

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response))