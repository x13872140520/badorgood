const random = ()=>{
    return Promise.resolve(Math.random())
}
'bad promise code💩'
const sumRandomAsyncNums = () =>{
    let first 
    let second
    let third
    return random().then(v =>{
        first = v
        return random()
    })
    .then(v=>{
        second = v
        return random()
    })
    .then(v =>{
        third = v
        return first + second +third
    })
}
'good promise code✔️'
const sumRandomAsyncNumsNew = async()=>{
    const first = await random()
    const second = await random()
    const third = await random()
    console.log(`Result ${first + second + third}` )
}