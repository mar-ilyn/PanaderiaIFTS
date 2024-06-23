const menu = document.querySelector(".menu-nav");
const navHome = document.querySelector(".nav-home");
const nav = document.querySelector("nav");
const li = document.querySelectorAll("li");
const menuImg = document.querySelector(".menu-img");
const contLista = document.querySelector(".cont-lista");
const btnNav = document.querySelectorAll(".btn-nav");

function myFunction(x) {
    if (x.matches) { // If media query matches
    menuImg.style.display= "inline-block";
      menu.style.display = "none";
      nav.style.justifyContent= "space-between";
      contLista.style.position = "absolute";
    menu.style.padding = "0";
    menu.style.flexDirection = "column";
    menu.style.height = "50vh";
    menu.style.maxHeight = "50vh";
    li.forEach(item => {
        item.style.height = "100%";
        item.style.width = "100%";
        item.style.padding = "0";
    });
    menu.style.height = "100%";
    menu.style.width = "100%";
    } else {
        menuImg.style.display= "none";
      menu.style.display = "flex";
        navHome.style.width = "30%";
      nav.style.justifyContent= "left";
      li.forEach(item => {
        item.style.height = ""; // Restaura las alturas originales de los elementos li
        item.style.width = "100%"; // Restaura los anchos originales de los elementos li
        item.style.padding = "";// Restaura el padding original de los elementos li
    });
    contLista.style.position = "";
    menu.style.flexDirection = "row";
    }
  }

var x = window.matchMedia("(max-width: 576px)");

myFunction(x);

x.addEventListener("change", function() {
    myFunction(x);
  });

function abrirMenu(){
    menu.style.display = "flex";
    contLista.style.height = "92vh";
    contLista.style.backgroundColor = "#eac7b2";
    contLista.style.top = "8vh";
    contLista.style.width = "100%";
    btnNav.forEach(btn => {
        btn.style.width = "100%";
        btn.style.padding = "10% 0"; // Ajusta el padding para distribuir mejor el espacio
    });
    menuImg.innerHTML = '<img src="imgs/cerrar-simbolo.png" alt="" onclick="cerrarMenu()">';
}

function cerrarMenu(){
    menu.style.display = "none"; // Oculta el menú principal
    menuImg.style.display = "inline-block"; // Muestra nuevamente el ícono del menú
    contLista.style.height = "10vh"; // Restaura la altura original del menú
    contLista.style.backgroundColor = "transparent"; // Restaura el color de fondo original
    contLista.style.top = "0"; // Restaura la posición desde la parte superior
    contLista.style.width = "34%"; // Restaura el ancho original del menú
    nav.style.width = "100%";

    // Restaura los estilos de los botones del menú
    btnNav.forEach(btn => {
        btn.style.width = ""; // Elimina el ancho personalizado
        btn.style.padding = ""; // Elimina el padding personalizado
    });

    // Restaura la imagen del menú en el botón de menú
    menuImg.innerHTML = '<img src="imgs/lista.png" alt="" onclick="abrirMenu()">';
};

window.addEventListener("resize", function () {
    x = window.matchMedia("(max-width: 700px)");
    myFunction(x);
});

btnNav.forEach(btn => {
    btn.addEventListener("click", () => {
        if (x.matches){
            cerrarMenu();
        }
        window.addEventListener("resize", function () {
            if (window.innerWidth <= 765) {
                contLista.style.width = "70%";
            } else if (window.innerWidth <= 1024) {
                // Estilos para ventana con ancho máximo de 765px
                // Ejemplo:
                contLista.style.width = "50%";
            }
        });
    });
});

//receta.html

document.addEventListener("DOMContentLoaded", () => {
    const contenedorRecetas = document.querySelector(".contenedor-receta");

    const receta = localStorage.getItem('receta');
    if (receta) {
        contenedorRecetas.innerHTML = receta;
    }
});
