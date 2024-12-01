// Arrays destructuring

let fruits = ['Apple', 'Banana']

let [a, b] = fruits

console.log(b, fruits.length)

// Objetc destructuring

let user = {
    name: 'Pablo',
    age: 41
}

let {name, age} = user

console.log(user.name, age, name)

// Spread operator

let person = {
    name: 'Andres',
    age: 41
}
let country = 'Cl'

let data = { ...person, country}

// data.name = 'Francisco'
console.log(data, person)

// rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[1])
    return num + values[0]
}

sum(1,2,3,4,5,6,7)