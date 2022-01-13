//Calcular edad promedio de personas registradas.

let cantidadPersonas = Number(prompt("Hola! ingresa la cantidad de personas para ingresar su edad"));
let promedio;
let acumulador = 0;

const Edades = (cantidad) => {
       for(let i=1; i<=cantidad; i++){
              let ingresoEdades = Number(prompt("ingrese las edades:"));
              acumulador = acumulador + ingresoEdades;
              promedio = acumulador/i;
       }
       return `La edad promedio de las ${cantidadPersonas} personas es de: ${promedio}`;
}

alert(Edades(cantidadPersonas));
