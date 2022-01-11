/* Ingresar 10 numeros y mostrar cuales son pares e impares */

for(let i = 0 ; i < 10 ; i++){
       let numeroIngrasado = Number(prompt("ingrese un numero"));
       if(numeroIngrasado%2 == 0){
              console.log(`El numero ingresado ${numeroIngrasado} es par`);
       }
       else{
              console.log(`El numero ingresado ${numeroIngrasado} es impar`);
       }
}