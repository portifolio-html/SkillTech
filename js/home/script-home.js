
var menu = document.querySelector("#menu-open")

menu.addEventListener("click", function(){
    var lista = document.querySelector('#nav-bar')
    var close = document.querySelector('#menu-open')
    lista.classList.toggle("cont-list-bar-on")
    close.classList.toggle("menu-list-close")
})