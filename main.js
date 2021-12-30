/*Solicitar al usuario dos numeros, y una operacion. Utilizando un condicional realizar la operacion solicitada 
por el usuario, y mostrar mediante un alert el resultado. (Verificar que los datos ingresados sean correctos).*/

//solicito el ingreso de los datos.
let operacion = prompt(`Hola! Ingrese una operacion matematica para resolver`).toLowerCase();
let primerNumero = parseFloat(prompt(`Ingrese un numero`));
let segundoNumero = parseFloat(prompt(`Ingrese otro numero`));

//Se realizan if y else if para identificar la operacion que ingreso el usuario y dentro de estas calcular la operacion elegida.
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
}