//Nav mobile 
const navToogle = document.querySelector(".toogle-init");
const navMenu = document.querySelector(".nav-menu");
const sidebar = document.querySelector(".toogle");

navToogle.addEventListener("click", function () {
    navMenu.classList.toggle("nav-phone-visible");
    sidebar.classList.toggle("hidden");


})

//Slider home

$(function () {
    $('#slider div:gt(0)').hide();
    setInterval(function () {
        $('#slider div:first-child').fadeOut(0)
            .next('div').fadeIn(800)
            .end().appendTo('#slider');
    }, 3000);
});