function onDrag({ movementX, movementY }) {
  let parent = this.parentElement;
  let getStyle = window.getComputedStyle(parent);

  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  parent.style.left = `${leftVal + movementX}px`;
  parent.style.top = `${topVal + movementY}px`;
}

document.addEventListener("mousedown", (e) => {
  if (e.target.nodeName == "HEADER") {
    var target = e.target;
    target.addEventListener("mousemove", onDrag);
  } else {
    return;
  }
  document.addEventListener("mouseup", () => {
    target.removeEventListener("mousemove", onDrag);
  });
});

//criar janela

const container = document.querySelector("body");
console.log(container);

function construirJanela() {
  let Janela = document.getElementsByTagName("template")[0];
  let novaJanela = Janela.content.cloneNode(true);
  container.appendChild(novaJanela);
}

//fechar janelas

document.addEventListener("click", (e) => {
  if (e.target.id === "close") {
    e.target.parentElement.parentElement.remove();
  }
});
