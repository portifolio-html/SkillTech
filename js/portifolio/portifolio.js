
var menu = document.querySelector("#menu-open")

menu.addEventListener("click", function(){
    var lista = document.querySelector('#nav-bar')
    lista.classList.toggle("cont-list-bar-on")
    this.classList.toggle("menu-list-close")
})