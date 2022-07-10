const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click",() => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const tenis1 = document.getElementById('tenis-1');
const tenis2 = document.getElementById('tenis-2');

const setaRight = document.getElementById('right');
const setaLeft = document.getElementById('left');

setaLeft.addEventListener('click',() =>{
    tenis1.style.left = '550px';
    tenis2.style.left = '50px';
})
setaRight.addEventListener('click',()=>{
    tenis1.style.left = '50px';
    tenis2.style.left = '-550px'; 
})
