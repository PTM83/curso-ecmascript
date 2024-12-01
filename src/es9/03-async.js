async function* anotherGenerator() {
    var id = 1
    while(id > 0) {
        yield await Promise.resolve(id)
        id++
    }
}
  
(async () => {
    const prueba = anotherGenerator()
    console.log((await prueba.next()).value)
    console.log((await prueba.next()).value)
    console.log((await prueba.next()).value)
})()

async function* aGenerator() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const prueba1 = aGenerator()

prueba1.next().then(response => console.log(response.value))
prueba1.next().then(response => console.log(response.value))
prueba1.next().then(response => console.log(response.value))
console.log('prueba')

async function arrayOfName(array) {
    for await (let value of array){
        console.log(value)
    }
}

const names = arrayOfName(['Andrew', 'Pabs', 'Albert'])
console.log('After')