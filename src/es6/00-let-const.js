var lastname = 'Pablo';
lastname = 'Andres'

let name = 'String'

name = 'name'

const animal = 'String'

console.log(lastname)
console.log(name)
console.log(animal)

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple' // function scope
        let fruit2 = 'Kiwi' // block scope
        const fruit3 = 'Banana' // block scope
    }
    console.log(fruit1)
    console.log(fruit1)
    console.log(fruit1)
}
fruits()