const targets = document.querySelectorAll('img')
console.log('123')
window.addEventListener('scroll',(event)=>{
    targets.forEach(img =>{
        console.log('💩')
        const rect = img.getBoundingClientRect().top
        if(react <= window.innerHeight){
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src',src)
            img.classList.add('fade')
        }
    })
})