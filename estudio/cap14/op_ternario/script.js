let edad = 15;
//condicional if

if (edad >= 18) { console.log("es mayor de edad") }
else { console.log("es menor de edad") };

//operador ternario (o condicional) (se usa parentesis si queres que actue como bloque)
//? == true,  : ==false
(edad >= 18) ? (
  console.log("es mayor de edad"), //usa coma para separar entre cada ejecucion
  console.log("lsdjals")
)
  : (
    console.log("es menor de edad")
  );

//se consume menos recursos que con un if

// otra cosa
let v1 = "valor 1";
let v2 = "valor 2";
let v3 = "valor 3";
let arr = ["valor 1", "valor 2", "valor 3"]
console.log(v1, v2, v3);
console.log(...arr);//muestra solo el valor del array
console.log(arr);

//parametro res ...parametro sirve para crear parametros infinitos o finitos qsy dentro de una funcion, si quieres agregar algun otro parametro que sea de otro tipo de dato siempre se pone delante del ...parametro.
function aaaa(num, ...nombre) {
  console.log(nombre);
  console.log(num);
}
aaaa(12, "pedro", "juanito", "marcela", "mariana", "tu vieja");

//agregar elementos de un array a otro  
let array = ["manzana", "limon", "banana"];
let array2 = ["kiwi", "durazno", "pera"];
array.push(...array2);

console.log(array)