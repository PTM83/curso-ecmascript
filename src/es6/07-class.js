// Declarar una class
class User {}

// instanciando una class
const newUser = new User()

// class user {
//   // create methods
//   greeting() {
//     return 'Hello'
//   }
// }

// Instancia
// const gndx = new user()

// console.log(gndx.greeting())

// const developer = new user()

// constructor

// class user1 {
//   constructor() {
//     console.log('Nuevo usuario')
//   }
  
//   greeting() {
//     return 'Hello'
//   }
// }

// class user {
//   // Constructor
//   constructor(name) {
//     this.name = name
//   }
//   // Methods
//   speak() {
//     return 'Hello'
//   }
  
//   greeting() {
//     return `${this.speak()} ${this.name}`
//   }
// }

// Setters Getters

class user {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // methods
    speak() {
        return 'Hello'
    }
    
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    // Obtener un valor
    get uAge() {
        return this.age  
    }
    // setear - modificar una clase
    set uAge(n) {
        this.age = n
    }
}

const usuario = new user('usuario', 41)

console.log(usuario.uAge)
console.log(usuario.uAge = 14)



