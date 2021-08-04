console.log("Hola mundo")

/*boton de scroll*/
let btnScroll = document.getElementById("scroll");

window.addEventListener('scroll',()=>{
    if (document.body.scrollTop> 20 || document.documentElement.scrollTop > 20) {
        btnScroll.style.display = 'flex'
    }
    else{
        btnScroll.style.display = 'none'
    }
})

btnScroll.addEventListener('click',()=>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})