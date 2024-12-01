// uso de flat y map

const array = [1,1,1,2,[1,3,4,5, [5,6,7,8,9]]]

// Se específica la profundidad de la estructura del Array
console.log(array.flat(3))

const array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value, value*2]))