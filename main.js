//Determinar si un numero es multiplo de otro

let primerNumero;
let segundoNumero;
let verificacion;

const Ingreso = () => {
       primerNumero = Number(prompt("Ingrese el primer numero para verificar si es multiplo del segundo numero a ingresar."));
       segundoNumero = Number(prompt("Ingrese el segundo numero"));
}

const VerificarMultiplo = (primero, segundo) => {
       if((primero % segundo) == 0){
              verificacion = true;
       }
       else{
              verificacion = false;
       }
}

const Resultado = (ver) => {
       if (ver != false) {
              alert("Son multiplos");
       }
       else{
              alert("No son multiplos");
       }
}

Ingreso();
VerificarMultiplo(primerNumero, segundoNumero);
Resultado(verificacion);