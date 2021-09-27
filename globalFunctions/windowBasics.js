let janelas = document.getElementsByClassName("window");
//criar janela
function construirJanela(e) {
  if (e.target.id == "app") {
    const container = document.querySelector("body");
    let Janela = document.getElementsByTagName("template")[0];
    let novaJanela = Janela.content.cloneNode(true);
    container.appendChild(novaJanela);
  }
}
//mover janela
function moverJanela(e) {
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
}
function onDrag({ movementX, movementY }) {
  let parent = this.parentElement;
  let getStyle = window.getComputedStyle(parent);

  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  parent.style.left = `${leftVal + movementX}px`;
  parent.style.top = `${topVal + movementY}px`;
}
//fechar janelas
function fecharJanela(e) {
  if (e.target.id == "fechar") {
    e.target.parentElement.parentElement.parentElement.remove();
  }
}
///minimizar janelas

function minimizarJanela(e) {
  if (e.target.id == "min") {
    e.target.parentElement.parentElement.parentElement.style.opacity = "0";
    e.target.parentElement.parentElement.parentElement.style.pointerEvents =
      "none";
  }
}
//maximizar janelas
function maxJanela(e) {
  if (e.target.id == "max") {
    let janela = e.target.parentElement.parentElement;
    if (janela.parentElement.id == "maximized") {
      janela.parentElement.style.top = "0";
      janela.parentElement.style.left = "0";
      janela.parentElement.style.width = "";
      janela.parentElement.style.height = "";
      janela.parentElement.style.position = "";
      janela.parentElement.style.borderRadius = "";
      janela.parentElement.id = "";
      return;
    }
    janela.parentElement.style.top = "0";
    janela.parentElement.style.left = "0";
    janela.parentElement.style.width = "100%";
    janela.parentElement.style.height = "92%";
    janela.parentElement.style.position = "static";
    janela.parentElement.style.borderRadius = "0";
    janela.parentElement.id = "maximized";
  }
}

export {
  construirJanela,
  moverJanela,
  fecharJanela,
  minimizarJanela,
  maxJanela,
};
