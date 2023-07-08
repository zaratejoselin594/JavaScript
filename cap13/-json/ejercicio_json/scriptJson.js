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

let frutasJsonDes = JSON.parse(frutasJson);

window.addEventListener("load", () => {
  crearColumnas("Nombre")
  crearColumnas("Color")
  crearColumnas("Sabor")
  crearColumnas("Precio")
  crearLineas(frutasJsonDes.frutas[0].nombre, frutasJsonDes.frutas[0].color, frutasJsonDes.frutas[0].sabor, frutasJsonDes.frutas[0].precio)
  crearLineas(frutasJsonDes.frutas[1].nombre, frutasJsonDes.frutas[1].color, frutasJsonDes.frutas[1].sabor, frutasJsonDes.frutas[1].precio)
  crearLineas(frutasJsonDes.frutas[2].nombre, frutasJsonDes.frutas[2].color, frutasJsonDes.frutas[2].sabor, frutasJsonDes.frutas[2].precio)
  crearLineas(frutasJsonDes.frutas[3].nombre, frutasJsonDes.frutas[3].color, frutasJsonDes.frutas[3].sabor, frutasJsonDes.frutas[3].precio)
})
const crearColumnas = (nombre) => {
  let columna = document.createElement("th");
  document.getElementById("thead").appendChild(columna)
  columna.textContent = nombre
}
const crearLineas = (fNombre, fColor, fSabor, fPrecio) => {
  let linea = document.createElement("tr");
  document.getElementById("tbody").appendChild(linea)
  let nombre = document.createElement("td")
  let color = document.createElement("td")
  let sabor = document.createElement("td")
  let precio = document.createElement("td")
  linea.appendChild(nombre)
  linea.appendChild(color)
  linea.appendChild(sabor)
  linea.appendChild(precio)
  nombre.textContent = fNombre
  color.textContent = fColor
  sabor.textContent = fSabor
  precio.textContent = fPrecio
}
