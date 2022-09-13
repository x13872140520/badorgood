const pikachu = {name:'Pikachu'}
const stas ={hp:40,attack:60,defense:45}

'bad object code💩'
pikachu['hp']=stats.hp
pikachu['attack']=stats.attack
pikachu['defense']=stats.defense

const lv10 = Object.assign(pikachu,stats)
const lv11 = Object.assign(pikachu,{hp:45})

'good object code✔️'
const nlv10= {...pikachu,...stats}
const nlv11= {...pikachu,hp:45}

let pokemon =['Arbok','Raichu','Sandshrew']

'bad💩'
pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')
'good✔️'
//Push
pokemon =[...pokemon,'Bulbasaur','Metapod','Weedle']
//Shift
pokemon =['Bulbasaur','Metapod','Weedle',...pokemon]

console.log('pokemon',pokemon)

