const user = {
    userName: 'Pablo',
    age: 41,
    country: 'CL'
}
  
const { userName, ...values } = user 
  
// Mostrar en tabla
console.table(values)
  
console.log(values.age)