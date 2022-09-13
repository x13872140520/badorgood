
const getFruit= async(name)=>{//此函数模拟异步操作,需要一定时间才有结果
    console.log('getFruit')
    const fruits={
        pineapple:'🍍',
        peach:'🍑',
        strawberry:'🍓'
    }
    
    return fruits[name]
}
const getFruit2=async(name)=>{//此函数模拟异步操作,需要一定时间才有结果
    const fruits={
        pineapple:'🍍',
        peach:'🍑',
        strawberry:'🍓'
    }
    return Promise.resolve(fruits[name])
    
}
getFruit2('peach').then(console.log)
const makeSmoothie = async() => {
    console.log('makeSmoothie')
  const a =  getFruit('pineapple')
  const b =  getFruit('strawberry')
  const smoothie = await Promise.all([a,b])  //1.还有一个好处是，a,b现在是一个接一个完成，ab之间并没有依赖关系，所以ab请求可以同时进行。假设a花1秒，b花1秒，同步开始可以只用1秒。
  return smoothie 
  //2.await的好处之一是可以一起返回a,b,这是在仅仅promise下无法直接做到的
}
 makeSmoothie()
const makeSmoothie2=()=>{
    let a 
    return getFruit('pineapple')
    .then(v=>{
        v =a 
        return getFruit('strawberry')
    })
    .then(v=>v+a)
}
//3.async-await还有好处是错误处理
const badSmoothie = async() => {
    try{
        const a =  getFruit('pineapple')
        const b =  getFruit('strawberry')
        const smoothie = await Promise.all([a,b])
        throw 'broken!'
        return smoothie 
    }catch(err){
        console.log(err)
        return 
    }
    
  }
