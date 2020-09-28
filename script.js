const grid = document.querySelector("#grid");

function createGrid(columns, rows) {

    //set values of css variables to argument values

    grid.style.setProperty("--columns", columns);
    grid.style.setProperty("--rows", rows);

    //create div elements

    for (let i = 0; i < (columns * rows); i++) {
      let box = document.createElement("div");
      box.className = "box";
      box.innerText = "";
      grid.appendChild(box);
    }

    //add event listener to every .box

    let boxes = document.querySelectorAll(".box");
    boxes.forEach((boxes) => {
        boxes.addEventListener("mouseenter", () => {
            boxes.style.backgroundColor = "black";
        })
    })
}

createGrid(16, 16);