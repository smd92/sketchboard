const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#resetBtn");
window.onload = createGrid(16,16);

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

    const boxesInit = document.querySelectorAll(".box");
    boxesInit.forEach((boxesInit) => {
        boxesInit.addEventListener("mouseenter", () => {
            boxesInit.style.backgroundColor = "black";
        })
    })
}

resetBtn.addEventListener("click", () => {
    let userInput = prompt("Please enter the number of columns/rows for your new grid (e.g. 64 will create a 64x64 grid)");

    const boxesUser = document.querySelectorAll(".box");
    boxesUser.forEach((boxesUser) => {
        boxesUser.style.backgroundColor = "";
    })

    createGrid(userInput, userInput);
})