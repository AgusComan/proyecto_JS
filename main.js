//declaracion de variables a uutilizar
let iniciarSesion;
let tiempoDeJuego;
let contador = 0;
let cont = 0;
let arrayUsuarios = [];


//funcion para registro de usuarios
const ingreso = () => {
       iniciarSesion = prompt("Hola! ingrese sesion con su nombre de usuario.");
       tiempoDeJuego = Number(prompt("Ingrese el tiempo de duracion del juego. Solo ingrese numeros enteros sin su unidad de medida, el valor se lo tomara en MINUTOS"));
       contador ++;
}


//creacion de objetos usando el metodo de clases para guardar los datos de los usarios registrados
class Usuarios {
       constructor(id , nombre , DuracionDelJuego){
              this.id = id;
              this.nombre = nombre;
              this.DuracionDelJuego = DuracionDelJuego;
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


//inicio de la "estructura principal"
//comienza con una aclaracion y una entrada de datos para evaluar condiciones y ciclos
inicio = prompt("Bienvenido! te voy a pedir que ingreses, para simular, los nombres de usuarios y su tiempo de juego de las personas que quieras para determinar quien sale primero tomando en cuenta la menor duracion. \n Para finalizar los ingresos ingrese 'FIN' \n De lo contrario apretar 'ENTER'").toLowerCase();

//El ciclo de reproduce hasta que el usuario lo finalize
while(inicio != "fin"){

       //llamada  a la funcion para registro de datos
       ingreso();

       //Se crea una instancia para los objetos con sus parametros
       const usuarioIngresado = new Usuarios (contador , iniciarSesion , tiempoDeJuego);
       usuarioIngresado.verificacion(iniciarSesion);

       //se cargan los usuarios que se ingresen a un array vacio
       arrayUsuarios.push(usuarioIngresado);

       //vuelve a pedir una entrada de datos para continuar o no el ciclo
       inicio = prompt("Bienvenido! te voy a pedir que ingreses, para simular, los nombres de usuarios y su tiempo de juego de las personas que quieras para determinar quien sale primero tomando en cuenta la menor duracion. \n Para finalizar los ingresos ingrese 'FIN' \n De lo contrario apretar 'ENTER'").toLowerCase();
}


//con el metodo .sort() se compara entre la duracion de juego de cada usuario asi ordenandolo de menor a mayor por medio de una resta y devolviendo un numero.
//este numero puede ser positivo, negativo o cero.
arrayUsuarios.sort(function(a, b){return a.DuracionDelJuego - b.DuracionDelJuego});


//DOM
let H2 = document.createElement("H2");
H2.innerHTML = `El ranking quedo de la siguiente manera:`;
document.body.appendChild(H2);

//se utiliza el for of para que recorra el array ya ordenado y muestre los resultados
for(const ranking of arrayUsuarios){

       //con un contador demuestran en que posición quedo cada jugador
       cont ++;
       let article = document.createElement("article");
       article.innerHTML = `<H3>En ${cont}° Lugar ${ranking.nombre} con un tiempo de ${ranking.DuracionDelJuego} minutos.</H3>`
       document.body.appendChild(article);
}


document.getElementsByTagName("body")[0].setAttribute("class", "cambioBack");