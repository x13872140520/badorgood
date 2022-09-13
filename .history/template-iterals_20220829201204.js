const horse={
    name:'bob',
    size:'100',
    skills:['run','jump'],
    age:'2'
}
'bad'
let bio = horse.name +'is a '+ horse.size +'horse skilled in' +horse.skills.join('&')

'good'
const { name, size, skills, age} = horse
bio = `${name} is a ${size} skilled in ${skills.join('&')}`
console.log(bio)
function horseAge(str, age){
    const ageStr = age > 5 ?'old':'yound'
    return `${str[0]}${ageStr} at ${age} years`
}

const bio2 = horseAge`This horse is ${horse.age}`
console.log(bio2)