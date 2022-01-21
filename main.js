// Desafio Complementario: Array de objetos "personas". Ordenar por mayor edad.
let inicio;
let ingresoPersonas;
let ingresoEdad;
let arrayPersonas = [];

class Personas {
       constructor(nombre , edad){
              this.nombre = nombre;
              this.edad = edad;
       }
}

const ordenarEdades = () => {
       console.log(`las personas ordenadas de mayor a menor son:`)
       for(const edades of arrayPersonas){
              console.log(`${edades.nombre} con ${edades.edad} años`);
       }
}


inicio = prompt("Hola! pulsa enter para ingresar el nombre y la edad de la persona. \n De lo contrario ingresa 'FIN'").toLowerCase();

while(inicio != "fin"){
       ingresoPersonas = prompt("Ingrese el nombre de la persona:");
       ingresoEdad = Number(prompt("Ingrese la edad de la persona:"));

       const instanciaPersona = new Personas(ingresoPersonas , ingresoEdad);
       arrayPersonas.push(instanciaPersona);

       inicio = prompt("Hola! pulsa enter para ingresar el nombre y la edad de la persona. \n De lo contrario ingresa 'FIN'").toLowerCase();
}

arrayPersonas.sort(function(a, b){return -a.edad + b.edad})

ordenarEdades();
