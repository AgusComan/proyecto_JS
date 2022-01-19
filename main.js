//declaracion de variables a uutilizar
let iniciarSesion;

//funcion para entrada de datos
const ingreso = () => {
       iniciarSesion = prompt("Hola! ingrese sesion con su nombre de usuario.");
       return `${iniciarSesion}`
}

//creacion de objetos usando el metodo de clases
class Usuarios {
       constructor(nombre){
              this.nombre = nombre;
       }

       verificacion(ingresoUsuario){
              if(ingresoUsuario != ""){
                     alert(`Bienvenido ${this.nombre}! Ingreso exitoso. ¿Listo para jugar?`);
              }
              else{
                     alert(`Error!! Hubo un problema al iniciar sesion.`);
                     console.error(`Error!! Hubo un problema al iniciar sesion.`);
              }
       }
}


ingreso();
const usuario1 = new Usuarios (iniciarSesion);
usuario1.verificacion();