//Las variables tienen un nombre y almacenan cierta informacion la cual puede variar
nombre = "pepe";
nombre = "pipo"
console.log(nombre)

//Tipo de datos
string = "cadena de texto"; //lleva comillas
Number = 123; //no leva comillas
Boolean = true // false;  devuelve dos valores dependiendo las condiciones

//Declarar variables como var, let y const, trabajan con el scope
//Es importante siempre declararlas variables
var variable = "Se puede modificar el valor en cualquier momento"; //var no es optimo
let variableLet = "Se puede modificar el valor solo si se encuentra en el mismo bloque de codigo"
const variableConst = "No se le puede modificar su valor en ningun momento" //No se puede declarar y despues inicializar

//Casos especiales de Datos
let undefined = "Significa que la variable esta declarada pero no contiene valor";
let Nan = "Significa que no es un numero (Not a Number), cuando estamos queriendo hacer un calculo matematico con algun caracter"
let Null = "Significa que la variable se declaro y se inicializo con un valor vacio intencionalmente"

//ejemplo undefined
let a;
console.log(a)
//ejemplo NaN
let b = 2 / "b"
console.log(b)
//ejemplo null
let c = null;
console.log(c)

// Declarar varias variables en una sola linea
let num1, num2, num3;
num1 = 1;
num2 = 2;
num3 = 3;
console.log(num1, num2, num3)