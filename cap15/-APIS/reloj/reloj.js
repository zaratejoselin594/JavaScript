

const addcero = (n) => {
  if (n.lenght < 2) return `0${n}`;
  return n;
}
const actTiempo = () => {
  const tiempo = new Date();
  let hora = addcero(tiempo.getHours());
  let minuto = addcero(tiempo.getMinutes());
  let segundo = addcero(tiempo.getSeconds()); 
  
  document.querySelector(".hora").textContent = hora;
  document.querySelector(".m").textContent = minuto;
  document.querySelector(".s").textContent = segundo;
}
actTiempo()
setInterval(() => {
  actTiempo()
}, 1000);