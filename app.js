const container = document.querySelector(".container");
const button = document.querySelector("button");

const divMaker = (row, column) => {
  const height = 960 / 16;
  const width = 960 / 16;
  for (let i = 0; i < row; i++) {
    const subContainer = document.createElement("div");
    container.appendChild(subContainer);
    for (let i = 0; i < column; i++) {
      const div = document.createElement("div");
      div.style.cssText = `height: ${height}px; width: ${width}px; background: #46424f; border: 1px solid black;`;
      subContainer.appendChild(div);
      div.addEventListener("mouseover", () => {
        div.style.background = randomHexColorCode();
        div.style.transition = "0.2s ease all";
      });
      div.addEventListener("mouseleave", () => {
        div.style.background = "#46424f";
        div.style.transition = "0.2s ease all";
      });
    }
  }
};

const getGridSize = () => {
  button.addEventListener("click", () => {
    const row = prompt("enter number of rows");
    const column = prompt("enter number of columns");
    divMaker(row, column);
  });
};

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

getGridSize();
