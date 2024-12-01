
function newUser(user, age, country, uId) {
    return {
        id: uId,
        user, 
        age,
        country
    }
}

console.log(newUser('gndx', 41, 'Cl', 1))