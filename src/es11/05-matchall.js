// Match all

//Expresión regular
const regex = /\b(Apple)+\b/g

const fruits = 'Apple, Bannana, Apple, orange, etc'

for (const match of fruits.matchAll(regex)) {
    console.log(match)
}