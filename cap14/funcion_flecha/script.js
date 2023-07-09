
//funcion normal (con un solo parametro y una sola funcion)
function saludar(nombre) {
  console.log("Saludos a " + nombre);
}
saludar("tu vieja");

//funcion flecha (con un solo parametro y una sola funcion)
const saludo = nombre => console.log("Hola " + nombre);
saludo("mariquita")

//this no hace referencia al objeto, no se recomienda usar como metodo.
// Las funciones flecha no pueden ser constructores

console.log(window === this);
console.log(this);
console.log(window);

this.nombre = "pepe";
console.log(window.nombre);
//si se saca el use strict si funciona pero como el fallo del ordenador con funcion flecha si funciona
function decir() {
  console.log(`Hola ${this.nombre}`);
}
decir()
//con funcion flecha
const aaa = () => {
  console.log(`Hola ${this.nombre}`);
}
aaa()
//con funciones normales funciona si creamos un objeto/variable que contenga la info
const objeto = {
  nombre: "manuelita",
  decir
}
