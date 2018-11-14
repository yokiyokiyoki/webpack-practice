import "./style.css";
import png from "./img/en.png";
function component() {
  let element = document.createElement("div");

  element.innerHTML = "hello world";
  element.classList.add("hello");

  let img = new Image();
  img.src = png;

  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
