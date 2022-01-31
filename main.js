//creacion de objetos usando el metodo de clases para guardar los datos de los usarios registrados
class Usuarios {
       constructor(nombre){
              this.nombre = nombre;
       }

       //con este metodo se verifica si el usuario ingreso o no el nombre de usuario. Depende la condicion se ejecuta un aviso
       verificacion(ingresoUsuario){
              if(ingresoUsuario != ""){
                     //DOM
                     let div = document.createElement("div");
                     div.innerHTML = `<h3> Bienvenido ${this.nombre}! Ingreso exitoso. ¿Listo para jugar? </h3>`
                     document.body.appendChild(div);
              }
              else{
                     //DOM
                     let div = document.createElement("div");
                     div.innerHTML = `<h3> Error!! Hubo un problema al iniciar sesion. Volve a intentarlo! </h3>`
                     document.body.appendChild(div);
              }
       }

}

//funcion para crear las cajas del juego
const cardsJuego = (cantidad) =>{
       //creo seccion para las cards
       const divCards = document.createElement("div");

       if(cantidad === 3){
              divCards.setAttribute("class", "seccionCards");
       }else if(cantidad === 4){
              divCards.setAttribute("class", "CuatroSeccionCards");
       }else{
              divCards.setAttribute("class", "CincoSeccionCards");
       }
       document.body.appendChild(divCards);

       let hasta = cantidad * cantidad;
       for(let i=0; i < hasta ;i++){
              const cajas = document.createElement("div");
              cajas.setAttribute("class", "cajasPropiedades");
              divCards.appendChild(cajas);
       }

}

//ESTRUCTURA PRINCIPAL
let cont = 0;
let arrayUsuarios = [];
const inputUsuario = document.querySelector("#nombreIngreso");
const botonUsuario = document.querySelector(".botonUsuario");


//evento iniciar sesion
botonUsuario.addEventListener("click", () =>{
       //Se crea una instancia para los objetos con sus parametros
       const usuarioIngresado = new Usuarios (inputUsuario.value);
       usuarioIngresado.verificacion(inputUsuario.value);

       //localStorage
       const enJOSN = JSON.stringify(usuarioIngresado);
       localStorage.setItem("nombre1", enJOSN);

       inputUsuario.value = "";
})

//vuelvo a traer los datos del storage y lo guardo
let loTraigoDeVuelta = localStorage.getItem("nombre1");

let usuario = JSON.parse(loTraigoDeVuelta);

arrayUsuarios.push(usuario);




//evento para elegir la dificultad
const dificultad = document.querySelector(".modoJuego");
dificultad.addEventListener("change", (evt)=>{
       if(dificultad.value == "Facil"){
              cardsJuego(3);
       }else if(dificultad.value == "Medio"){
              cardsJuego(4);
       }else if(dificultad.value == "Dificil"){
              cardsJuego(5);
       }
})


//evento para reinicar el game
const recargarPagina = document.querySelector(".reset");
recargarPagina.addEventListener("click", ()=>{
       window.location.reload();
})


//DOM
let H2 = document.createElement("H2");
H2.innerHTML = `Los usuarios registrados son:`;
document.body.appendChild(H2);



//se utiliza el for of para que recorra el array ya ordenado y muestre los resultados
for(const ranking of arrayUsuarios){
       let article = document.createElement("article");
       article.innerHTML = `<H3> ${ranking.nombre} </H3>`
       document.body.appendChild(article);
}