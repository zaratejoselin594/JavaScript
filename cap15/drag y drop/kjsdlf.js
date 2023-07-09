const circ = document.querySelector(".circulo");
const rect = document.querySelector(".zonarect");

//eventos drag (el objeto a mover)
//circ.addEventListener("dragstart", () => console.log(1));
//circ.addEventListener("drag", () => console.log(2));
//circ.addEventListener("dragend", () => console.log(3));

//evento que siente la zona a la cual vamos a encimar el obj
rect.addEventListener("dragenter", () => console.log("uno"));
rect.addEventListener("dragover", (e) => {
  e.preventDefault()//para activar el 3
  console.log("dos")
});
rect.addEventListener("drop", () => console.log("tres"));
rect.addEventListener("dragleave", () => console.log("cuatro"));

//buscar setdata y getdata