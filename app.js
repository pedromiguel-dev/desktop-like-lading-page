const janela = document.querySelector(".window"),
  barra = janela.querySelector(".window__barra");

function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(janela);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  janela.style.left = `${leftVal + movementX}px`;
  janela.style.top = `${topVal + movementY}px`;
}
barra.addEventListener("mousedown", () => {
  barra.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", () => {
  barra.removeEventListener("mousemove", onDrag);
});
