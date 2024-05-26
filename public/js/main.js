console.log("JavaScript test!");

let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let lis = document.querySelectorAll('.nav .nav_link')
let body = document.querySelector('body')

function clickMenu() {
    if(window.innerWidth < 768){
        burger.classList.toggle('active')
        nav.classList.toggle('active')
        lis.forEach((li,index) =>{
            li.style.animation ?  li.style.animation='' : li.style.animation = `showLi 0.5s ease forwards ${index/5 + 0.3}s`
        })
        body.classList.toggle('stop-scrolling')
    }
}

burger.addEventListener('click', clickMenu)
lis.forEach(li => li.addEventListener('click',clickMenu));

