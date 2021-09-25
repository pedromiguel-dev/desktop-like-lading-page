//criar janela
let janelas = document.getElementsByClassName("window");

function construirJanela() {
  const container = document.querySelector("body");
  let Janela = document.getElementsByTagName("template")[0];
  let novaJanela = Janela.content.cloneNode(true);
  container.appendChild(novaJanela);
}

//mover janelas
document.addEventListener("mousedown", (e) => {
  if (e.target.nodeName == "HEADER") {
    var target = e.target;
    target.addEventListener("mousemove", onDrag);
    if (janelas) {
      for (var i = 0; i < janelas.length; i++) {
        janelas[i].style.zIndex = "0";
        target.parentElement.style.zIndex = "1";
      }
    }
  } else {
    return;
  }
  document.addEventListener("mouseup", () => {
    target.removeEventListener("mousemove", onDrag);
  });
});

function onDrag({ movementX, movementY }) {
  let parent = this.parentElement;
  let getStyle = window.getComputedStyle(parent);

  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  parent.style.left = `${leftVal + movementX}px`;
  parent.style.top = `${topVal + movementY}px`;
}

//fechar janelas
document.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id == "fechar") {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

///minimizar janelas
document.addEventListener("click", (e) => {
  if (e.target.id == "min") {
    e.target.parentElement.parentElement.parentElement.style.opacity = "0";
    e.target.parentElement.parentElement.parentElement.style.pointerEvents =
      "none";
  }
});
//max janelas
document.addEventListener("click", (e) => {
  if (e.target.id == "max") {
    e.target.parentElement.parentElement.parentElement.style.width = "100%";
    e.target.parentElement.parentElement.parentElement.style.height = "100%";
  }
});
