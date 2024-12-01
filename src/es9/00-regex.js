const regex = /(\d{4})-(\d{2})-(\d{2})/ // Estructura de regex para fechas yyy-mm-dd

const today = new Date()

console.log(today.getMonth() + 1)

const matchers = regex.exec('2024-11-30')

console.log(matchers)
// Permite mostrar una tabla
console.table(matchers)