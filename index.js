fold = document.querySelector('.fold')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')

fold.addEventListener('click', ()=>{
navbar.classList.toggle('nav-res');
navlist.classList.toggle('ul-res');
rightnav.classList.toggle('ul-res');
})