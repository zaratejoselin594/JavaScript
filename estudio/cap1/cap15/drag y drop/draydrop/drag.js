let dragged;

/* eventos activados en el objetivo arrastrable */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
  // almacenar una ref. en el elemento arrastrado
  dragged = event.target;
  console.log(event)
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // restablecer la transparencia
  event.target.classList.remove("dragging");
});

/* eventos disparados en los objetivos de lanzamiento */
const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
    // prevenir el valor predeterminado para permitir la caída
    event.preventDefault();
  },
  false
);

target.addEventListener("dragenter", (event) => {
  // resalte el objetivo de colocación potencial cuando el elemento arrastrable ingrese en él
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // restablecer el fondo del objetivo de colocación potencial cuando el elemento que se puede arrastrar lo deja
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
  // evitar la acción predeterminada (abrir como enlace para algunos elementos)
  event.preventDefault();
  // mover el elemento arrastrado al destino de colocación seleccionado
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    event.target.appendChild(dragged);
  }
});
