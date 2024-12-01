// Private - se hace uso de # para que los elementos sean usados dentro de la class
class user {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // methods
    #speak() {
        return 'Hello'
    }
    
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    // Obtener un valor
    get #uAge() {
        return this.age  
    }
    // setear - modificar una clase
    set #uAge(n) {
        this.age = n
    }
}

const usuario = new user('usuario', 41)

console.log(usuario.uAge)
console.log(usuario.uAge = 14)