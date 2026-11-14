import { header } from "./header";
import { main } from "./main";

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  body.appendChild(header());

  body.appendChild(main());

  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  const buttonDecrement = body.querySelector("#decrement");
  buttonDecrement.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
