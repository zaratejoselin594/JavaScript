//son funciones dentro de funciones;
//primera funcion

let numeros = [1, 2, 4, 5, 6, 8];
numeros.forEach(num => {
  const p = document.querySelector("p");
  p.textContent = numeros;
  const pe = document.querySelector(".parrafo");
  pe.textContent = add();
  function add() {
    numeros.push(3)
    numeros.push(7)
    numeros.sort()
  }

});

//otro ejemplo

suma = (n1, n2, callbakc) => {
  callbakc(n1, n2);
}
//   n1,n2, callback =>
suma(21, 3, (a, b) => { console.log(a + b); })

/*Una función de devolución de llamada es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. */
//otro ej;

saludo = (nombre, a) => {
  a(nombre);
}

a = (nombre) => { alert(nombre) };

saludo("pepe", a)

//otro ej:
function greeting(nombre) {
  alert(`Hello, ${nombre}`);
}

function processUserInput(callback) {
  const nombre = prompt("Please enter your name.");
  callback(nombre);
}

processUserInput(greeting);
