/*Proyecto: Conversion de datos en formato JSON a tablas
Objetivo: El objetivo de este proyecto es tomar un archivo de datos en formato JSON y convertirlo en una tabla HTML dinámica utilizando JavaScript. Esto permitirá mostrar los datos de una manera más visual y fácil de entender para los usuarios.*/ 

let frutasJson = `{
   "frutas": [
    {
      "nombre": "manzana",
      "color": "rojo",
      "sabor": "dulce",
      "precio": 2.5
    },
    {
      "nombre": "banana",
      "color": "amarillo",
      "sabor": "dulce",
      "precio": 1.5
    },
    {
      "nombre": "naranja",
      "color": "naranja",
      "sabor": "ácido",
      "precio": 2.0
    },
    {
      "nombre": "uva",
      "color": "morado",
      "sabor": "dulce",
      "precio": 3.0
    }
  ]
}`;

let frutasJsonDeserializado = JSON.parse(frutasJson);

let tabla = document.createElement("table");
let thead = document.createElement("thead");
tabla.appendChild(thead);
const crearColumnas = (cantColumna, ...valorColumna) => {
  for (let i = 0; i <= cantColumna; i++){
    let columna = document.createElement("th");
    thead.appendChild(columna)
    columna.textContent = valorColumna[i]
  }
}
crearColumnas(4, "manzana", "banana", "naranja", "uva")