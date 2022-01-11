/* Ingresar n numeros y mostrar cuales son pares e impares */

let cantidad = parseInt(prompt("Hola! Ingrese la cantidad de numeros a ingresar:"));

for(let i = 0 ; i < cantidad ; i++){
       let numeroIngrasado = Number(prompt("ingrese un numero"));
       if(numeroIngrasado%2 == 0){
              console.log(`El numero ingresado ${numeroIngrasado} es par`);
       }
       else{
              console.log(`El numero ingresado ${numeroIngrasado} es impar`);
       }
}