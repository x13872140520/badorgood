'Bad'
function feed(animal){
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`
}

'Good'
function feed({name,meal,diet}){
    return `Feed ${name} ${meal} kilos of ${diet}`
}

function feed(animal){
    const {name,meal,diet} =animal
    return `Feed ${name} ${meal} kilos of ${diet}`
}