//Registrarse con el nombre para jugar

let iniciarSesion; //Declaracion de una variable para guardar los datos de entrada

//funcion para entrada de datos
const Ingreso = () => {
       iniciarSesion = prompt("Hola! ingrese sesion con su nombre de usuario.");
       return `${iniciarSesion}`
}

//funcion para verificar si se ingreso el nombre de usuario o no se ingreso nada
const Verificacion = (contenido) => {
       if(contenido != ""){
              alert(`Bienvenido ${contenido}! Ingreso exitoso. ¿Listo para jugar?`);
       }
       else{
              alert(`Error!! Hubo un problema al iniciar sesion.`);
              console.error(`Error!! Hubo un problema al iniciar sesion.`);
       }
}

//Declaraciones de las funciones a usar
Ingreso();
Verificacion(iniciarSesion);