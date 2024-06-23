const menu = document.querySelector(".menu-nav");
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

//recetas.html

const btnRec = document.querySelectorAll(".btn-rec");

btnRec.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("receta-1")) {
            const receta = `<h1 class="titulo-recetas">Medialunas de Manteca</h1>
    <img src="imgs/mediaLunas.png" class="receta-img" alt="">
    <div class="ingredientes">
        <h2>Ingredientes</h2>
    <p class="p-ingredientes">
        <ul>
            <li><strong>Masa:</strong></li>
            <li>1 kg harina 0000</li>
            <li>80 gr azúcar común</li>
            <li>20 gr sal</li>
            <li>40 gr Levadura fresca</li>
            <li>550 cc leche fría o 550gr leche en polvo con 60cc de agua</li>
            <li>10 gr extracto vainilla</li>
            <li>10 cc edulcorante</li>
            <li>10 gr miel</li>
            <li><strong>Empaste:</strong></li>
            <li>400 gr manteca</li>
            <li><strong>Almíbar:</strong></li>
            <li>200 cc agua</li>
            <li>200 gr azúcar</li>
        </ul>
    </p>
    </div>
    <div class="pasos">
        <h2>Pasos</h2>
    <p class="p-pasos">
        <ul>
            <li><h5>1</h5>Hacer una corona con la harina, en los costados esparcir la sal, en el centro agregar todos los ingredientes de a uno como están en la lista. No es una masa que requiera mucho amasado solo hay que integrar y lograr una masa homogénea, una vez logrado guardar en heladera (le leva en frío) hasta que duplique su tamaño tapado con un plástico. Luego sacarla y estirarla por completo Mientras tanto aplastar la manteca entre una bolsa o plástico que cubra la mitad de la masa y hacer una vuelta doble.</li>
            <li><h5>2</h5>Dejar descansar en heladera y repetir dos o tre veces más. En este punto podes dejar la masa en la heladera hasta el otro día, luego sacar de la heladera y volver a hacer una vuelta doble mientras más vueltas mejor va a hacer el hojaldre. Dejar descansar nuevamente y si no estas muy mareado ya podemos empezar a hacer las facturas. Estirar la masa en la mesa con harina para que no se pegue y cortar 3 tiras de 10cm de ancho te podes ayudar con una hoja oficio doblada a la mitad.</li>
            <li><h5>3</h5>
                La idea es que por cada tira salgan 12 triángulos de esta forma saldrian las 3 docenas. Enrollar con por lo menos 3 vueltas y darle forma de medialuna taparlas con un plástico y dejarlas duplicar su tamaño.</li>
            <li><h5>4</h5>Pintar con huevo con un chorrito de leche, dejar orear y mandar al horno. Se cocinan en 20 min. A horno moderado o bajo si tu horno es fuerte.</li>
            <li><h5>5</h5>Una vez sacadas del horno pintar con almíbar el cual se hace a baño María. Y espolvorear con azúcar.</li>
        </ul>
    </p>
    </div>`;
            localStorage.setItem('receta', receta);
            window.location.href = 'recetas.html';
        }else if(btn.classList.contains("receta-2")){
            const receta = `<h1 class="titulo-recetas">Alfajores de Maicena</h1>
    <img src="imgs/alfajores-de-maicena.jpg" class="receta-img" alt="">
    <div class="ingredientes">
        <h2>Ingredientes</h2>
    <p class="p-ingredientes">
        <ul>
            <li><strong>Masa:</strong></li>
            <li>200 gr manteca/margarina</li>
            <li>200 gr harina 0000</li>
            <li>300 gr fécula de maíz (maizena)</li>
            <li>1/2 cucharadita bicarbonato</li>
            <li>2 cucharaditas polvo de hornear (bien colmadas)</li>
            <li>150 gr azúcar (se puede reemplazar por azúcar impalpable)</li>
            <li>3 yemas</li>
            <li>1 cucharada coñac</li>
            <li>1 cucharadita esencia de vainilla</li>
            <li>1 cda ralladura de limón</li>
            <li><strong>Relleno:</strong></li>
            <li>dulce de leche repostero</li>
            <li>coco seco</li>
        </ul>
    </p>
    </div>
    <div class="pasos">
        <h2>Pasos</h2>
    <p class="p-pasos">
        <ul>
            <li><h5>1</h5>Tamizar la harina, el almidón de maíz maizena, el bicarbonato y el polvo de hornear. Reservar</li>
            <li><h5>2</h5>En un bol batir (si es con batidora mejor) la manteca blanda, tipo pomada no derretida, con el azúcar. Es importante este paso para lograr un buen cremado.</li>
            <li><h5>3</h5>Agregar las yemas de a una, mezclando bien cada vez, luego agregar el coñac, la esencia y la ralladura de limón, mezclar bien. terminar de incorporar batiendo.</li>
            <li><h5>4</h5>Incorporar poco a poco los secos tamizados mientras unimos con nuestras manos todo sobre la mesada formando un arenado húmedo no amasando. Este es otro paso importante para lograr que se unan todos los ingredientes y que quede una masa que luego de deshaga en la boca. una vez que logramos que el arenado esté totalmente húmedo y no quedar rastros de harina terminar de unir sin amasar. Llevar a la heladera 30 minutos envuelta en film.</li>
            <li><h5>5</h5>Estirar la masa sobre la mesa enharinada y dejarla de 1/2 cm. de espesor y cortar círculos de unos 4 cm. de diámetro aproximadamente.</li>
            <li><h5>6</h5>Colocarlos en placas enmantecadas y enharinadas. cocinar en horno medio pre-calentado a 180ºc durante unos 10 a 12 minutos depende del horno. es importante que no doren, solo en la base.</li>
            <li><h5>7</h5>Retirar de la placa con mucho cuidado ayudándote con una espátula. yo le doy antes un pequeño golpe en la basa a la placa sobre la mesada para despegarlos.</li>
            <li><h5>8</h5>Dejar enfriar antes de armarlos.</li>
            <li><h5>9</h5>Formar los alfajores uniendo dos tapitas con dulce de leche, presionar apenas, pintar los bordes con dulce de leche (con ayuda de un cuchillito) y luego hacerlos rodar por coco rallado</li>
        </ul>
    </p>
    </div>`
    localStorage.setItem('receta', receta);
            window.location.href = 'recetas.html';
        }else if(btn.classList.contains("receta-3")){
            const receta = `<h1 class="titulo-recetas">Pasta frola</h1>
    <img src="imgs/pasta-frola.jpg" class="receta-img" alt="">
    <div class="ingredientes">
        <h2>Ingredientes</h2>
    <p class="p-ingredientes">
        <ul>
            <li><strong>Masa:</strong></li>
            <li>125 gr manteca o margarina</li>
            <li>125 gr azúcar</li>
            <li>1 huevo</li>
            <li>ralladura de 1/2 limón</li>
            <li>esencia de vainilla</li>
            <li>250 gr harina leudante</li>
            <li><strong>Relleno:</strong></li>
            <li>600 gr dulce de membrillo</li>
        </ul>
    </p>
    </div>
    <div class="pasos">
        <h2>Pasos</h2>
    <p class="p-pasos">
        <ul>
            <li><h5>1</h5>Cremar manteca y azúcar</li>
            <li><h5>2</h5>Agregar ralladura de limón, el huevo y la esencia. Integrar</li>
            <li><h5>3</h5>Incorporar la harina leudante</li>
            <li><h5>4</h5>Formar un bollo tierno sin amasar. Yo lo hago con la misma espátula. Queda una masa blanda ojo no agregar más harina</li>
            <li><h5>5</h5>Envolver en film y llevar a la heladera mínimo 2 horas.</li>
            <li><h5>6</h5>Espolvorear mesa y masa con harina</li>
            <li><h5>7</h5>Con las 3/4 partes de masa estirar y forrar un molde de 26 cm de diámetro.</li>
            <li><h5>8</h5>Poner encima el dulce de membrillo. Yo previamente a pisarlo lo pongo en el microondas 1 minuto</li>
            <li><h5>9</h5>Hacer el enrejado con la masa restante. Yo estiro la masa y voy cortando las tiras con una cuchilla. Pintar con huevo batido. Ojo solo las tiras no el borde.</li>
            <li><h5>10</h5>Llevar a cocinar en horno 190° durante 25 minutos aproximadamente. Depende de cada horno.</li>
        </ul>
    </p>
    </div>`;
            localStorage.setItem('receta', receta);
            window.location.href = 'recetas.html';
        }else if(btn.classList.contains("receta-4")){
            const receta = `<h1 class="titulo-recetas">Rosca de Pascua</h1>
    <img src="imgs/rosca-de-pascua.jpg" class="receta-img" alt="">
    <div class="ingredientes">
        <h2>Ingredientes</h2>
    <p class="p-ingredientes">
        <ul>
            <li><strong>Masa:</strong></li>
            <li>10 gr levadura (la de sobrecito)</li>
            <li>100cc agua tibia (aprox. 1/4 taza)</li>
            <li>500 gr harina 000</li>
            <li>1 cdita. sal</li>
            <li>100 gr manteca pomada</li>
            <li>4 huevos, uno de ellos para pintar</li>
            <li>100 gr azúcar</li>
            <li>Ralladura de 1 limón y esencia de vainilla</li>
            <li><strong>Crema pastelera:</strong></li>
            <li>3 huevos</li>
            <li>3 cdas fécula de maíz</li>
            <li>3 cdas harina 000</li>
            <li>300 gr azúcar</li>
            <li>500 cc leche</li>
        </ul>
    </p>
    </div>
    <div class="pasos">
        <h2>Pasos</h2>
    <p class="p-pasos">
        <ul>
            <li><h5>1</h5>Poner la levadura con 2 cditas. de azúcar, el agua tibia y 2 cdas de harina y mezclar tratando de que no queden muchos grumos.</li>
            <li><h5>1</h5>Luego taparla con un platito para que fermente más rápido.</li>
            <li><h5>3</h5>Colocar en un bowl el azúcar, la harina, la manteca, 3 huevos, la ralladura de limón, un chorrito de esencia de vainilla y batirlo bien.</li>
            <li><h5>4</h5>Agregar lo que preparamos en el primer punto y una cdita de sal. Mezclar todo muy bien y formar una masa (si es necesario agregar un poquito más de harina pero de a poco para no pasarse).</li>
            <li><h5>5</h5>Cuando la masa quedo algo blanda pero ya no se pega tanto en la mano, tapar y dejar levar. Si está cerca de una hornalla donde reciba un poco de calor.</li>
            <li><h5>6</h5>Cuando ya la masa haya duplicado su volumen, separar en 2 o 3 bollos, estirar como si fuera un chorizo y poner el un molde savarín, previamente enmantecado y enharinado, uniendo una punta con la otra.</li>
            <li><h5>7</h5>También se puede hacer en una pizzera y en el medio poner una lata de arvejas o tomates sin el papel con un poquito de agua, cumple la misma función del savarín.</li>
            <li><h5>8</h5>En el caso de poner la lata enmantecar y enharinar la parte de afuera para que la masa no se pegue.</li>
            <li><h5>9</h5>Decorar con crema pastelera y pintar (con el huevo que nos quedó) las partes donde no haya crema pastelera.</li>
            <li><h5>10</h5>Poner en el horno precalentado aprox unos 20 min. a fuego moderado y cuando introduzcan un cuchillo y este salga seco retirar y dejar enfriar.</li>
            <li><h5>11</h5>La preparación de la crema pastelera es: Mezclar los huevos con la fécula, la harina y el azúcar. Calentar la leche y antes del hervor volcar una parte sobre los huevos.</li>
            <li><h5>12</h5>Batir bien y volcar el resto de la leche para llevar todo nuevamente al fuego.</li>
            <li><h5>13</h5>Revolver continuamente y cocinar hasta que espese, dejar hervir solo 1 min. y retirar. Enfriar a temperatura ambiente y llevar a la heladera hasta el momento de utilizarla.</li>
        </ul>
    </p>
    </div>`;
            localStorage.setItem('receta', receta);
            window.location.href = 'recetas.html';
        }
    });
});
