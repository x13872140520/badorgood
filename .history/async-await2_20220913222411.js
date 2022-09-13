
const getFruit=(name)=>{
    const fruits={
        pineapple:'🍍',
        peach:'🍑',
        strawberry:'🍓'
    }
    return Promise.resolve(fruits[name])
}
getFruit('peach').then(console.log)
const badSmoothie  = async()=>{
    try {
        const
    }
}
const makeSmoothie = async()=>{
  const a = await getFruit('pineapple')
  const b = await getFruit('pineapple')
  return [a,b] //await的好处之一是可以一起返回a,b,这是在仅仅promise下无法直接做到的
}

const makeSmoothie2=()=>{
    let a 
    return getFruit('pineapple')
    .then(v=>{
        v =a 
        return getFruit('strawberry')
    })
    .then(v=>v+a)
}
