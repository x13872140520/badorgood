// const targets = document.querySelectorAll('img')
// console.log('123')
// window.addEventListener('scroll',(event)=>{
//     targets.forEach(img =>{
//         console.log('💩')
//         const rect = img.getBoundingClientRect().top
//         if(rect <= window.innerHeight){
//             const src = img.getAttribute('data-lazy');
//             img.setAttribute('src',src)
//             img.classList.add('fade')
//         }
//     })
// })
const targets = document.querySelectorAll('img')
const lazyLoad =target =>{
    const io =new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry =>{
            console.log('💪')
            if(entry.isIntersecting){
                const img  =entry.target
                const src = img.getAttribute('data-lazy')
                img.setAttribute('src',src)
                img.classList.add('fade')
                observer.disconnect()
            }
        })
    })
    io.observe(target)
}

window.addEventListener('scroll',(event)=>{
    targets.forEach(lazyLoad)
})