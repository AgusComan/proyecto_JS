/*---PRACTICANDO CONDICIONALES---*/

/*1. Solicitar al usuario dos numeros, y una operacion. Utilizando un condicional realizar la operacion solicitada 
por el usuario, y mostrar mediante un alert el resultado. (Verificar que los datos ingresados sean correctos).*/

/*let operacion = prompt(`Hola! Ingrese una operacion matematica para resolver`).toLowerCase();
let primerNumero = parseFloat(prompt(`Ingrese un numero`));
let segundoNumero = parseFloat(prompt(`Ingrese otro numero`));

if(operacion == "suma"){
       console.log(`La ${operacion} es: ${primerNumero + segundoNumero}`);
}
else if(operacion == "resta"){
       console.log(`La ${operacion} es: ${primerNumero - segundoNumero}`);
}
else if(operacion == "multiplicacion"){
       console.log(`La ${operacion} es: ${primerNumero * segundoNumero}`);
}
else if(operacion == "division"){
       console.log(`La ${operacion} es: ${primerNumero / segundoNumero}`);
}
else if(operacion == "potencia"){
       console.log(`La ${operacion} es: ${primerNumero ** segundoNumero}`);
}
else if(operacion == "resto"){
       console.log(`La ${operacion} es: ${primerNumero % segundoNumero}`);
}
else{
       console.log("La operacion no es posible");
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2. Solicitar al usuario el año de nacimiento y calcular la edad. Mostrar mediante alert si la persona es mayor o menor de edad.

/*let añoNacimiento = Number(prompt("Hola! Ingrese su año de nacimiento:"));
let edad = 2021 - añoNacimiento;

if(edad >= 18){
       alert(`Usted tiene ${edad} años, es mayor de edad.`);
}
else{
       alert(`Usted tiene ${edad} años, es menor de edad.`);
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//3. Solicitar al usuario un numero cualquiera, y verificar si es par o impar.

/*let numero = Number(prompt("Hola! Ingresa un numero para ver su paridad"));
if(numero%2 === 0){
       console.log(`El numero ${numero} es par.`);
}
else{
       console.log(`El numero ${numero} es impar.`);

}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*4. Solicitar al usuario que ingrese dos numeros, determinar cual es el mayor y cual es el menor. En caso de que sean iguales tambien deberá ser informado. 
Imprimir el resultado por consola y por alert.*/

/*let primerNumero = Number(prompt("Hola, ingrese un numero"));
let segundoNumero = Number(prompt("Ingrese un segundo numero"));

if(primerNumero > segundoNumero){
       console.log(`El primer numero ingresado (${primerNumero}) es mayor que el segundo numero ingresado(${segundoNumero})`);
}
else if(primerNumero < segundoNumero){
       console.log(`El segundo numero ingresado (${segundoNumero}) es mayor que el primer numero ingresado(${primerNumero})`);
}
else{
       console.log("Ambos numeros son iguales");
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//5. Solicitar al usuario que ingrese una letra , Indicar si es una vocal o consonante. 

/*let letra = prompt("Ingrese una letra para saber si es vocal o consonante").toLowerCase();

switch(letra){
       case 'a':
              console.log("Es una vocal");
       break;

       case 'e':
              console.log("Es una vocal");
       break;

       case 'i':
              console.log("Es una vocal");
       break;

       case 'o':
              console.log("Es una vocal");
       break;

       case 'u':
              console.log("Es una vocal");
       break;

       default:
              console.log("Es una consonante");
       break;
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//6. Solicitar al usuario un numero, indicar si el mismo es positivo, negativo o si es cero.

/*let numero =  Number(prompt("Ingresa un numero para ver si es positivo, negativo o cero"));

if(numero >= 1){
       console.log("Es positivo");
}
else if(numero <=-1){
       console.log("Es negativo");
}
else{
       console.log("El numero es Cero")
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//7. Solicitar al usuario que ingrese un año, determinar si es bisiesto o no.

/*let año = Number(prompt("Hola! ingrese un año para saber si es bisiesto o no"));

if(año%4 === 0){
       console.log(`El año ${año} SI es bisiesto`);
}
else{
       console.log(`El año ${año} NO es bisiesto`);
}*/
