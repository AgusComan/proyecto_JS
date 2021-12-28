alert(`Hola! A continuacion le vamos a pedir que ingrese dos numeros para realizar operaciones matematicas.`);

let primerNumero = parseFloat(prompt(`Ingrese un numero: `));
let segundoNumero = parseFloat(prompt(`Ingrese otro numero: `));

alert(`Los resultados son: \t
       Suma: ${primerNumero + segundoNumero} \t
       Resta: ${primerNumero - segundoNumero} \t
       Multiplicacion: ${primerNumero * segundoNumero} \t
       Division: ${primerNumero / segundoNumero}`
);

console.log(`Los resultados son: \t
             Suma: ${primerNumero + segundoNumero} \t
             Resta: ${primerNumero - segundoNumero} \t
             Multiplicacion: ${primerNumero * segundoNumero} \t
             Division: ${primerNumero / segundoNumero}`
);