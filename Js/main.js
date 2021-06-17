















const navToogle = document.querySelector(".toogle-init");
const navMenu = document.querySelector(".nav-menu");
const sidebar = document.querySelector(".toogle");

navToogle.addEventListener("click",function() {
    navMenu.classList.toggle("nav-phone-visible");
    sidebar.classList.toggle("hidden");
  
   
})