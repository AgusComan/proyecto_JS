alert(`Hola! A continuacion le vamos a pedir que ingrese dos numeros para realizar operaciones matematicas.`);

//Mediante un promt y su correspondiente parseo se le asigna una variable para que el contenido quede guardado en ella
let primerNumero = parseFloat(prompt(`Ingrese un numero: `));
let segundoNumero = parseFloat(prompt(`Ingrese otro numero: `));

//Luego se crea la alert y la muestras por consola para mostrar los resultados
//Dentro de estas se usa los "\t" por estetica
// Y tambien se uso los Back ticks para poner dentro las operaciones
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