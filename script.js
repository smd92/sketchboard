const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#resetBtn");
const magicMode = document.querySelector("#magicMode");

//initial grid when page is loaded
window.onload = createGrid(16,16);
window.onload = addBlackColor();

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
}

//reset button
resetBtn.addEventListener("click", () => {
    let userInput = prompt("Please enter the number of columns/rows for your new grid (e.g. 64 will create a 64x64 grid)");
    
while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
}

createGrid(userInput, userInput);
addBlackColor();
})

//add event listener for black background color to every .box
function addBlackColor() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((boxes) => {
        boxes.addEventListener("mouseenter", () => {
            boxes.style.backgroundColor = "black";
        })
    })
}

//magic mode button
magicMode.addEventListener("click", () => {
    let userInput = prompt("Please enter the number of columns/rows for your new grid (e.g. 64 will create a 64x64 grid)");
    
while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
}

createGrid(userInput, userInput);
})

//add event listener for random background color to every .box
function addRandomColor() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((boxes) => {
        boxes.addEventListener("mouseenter", () => {
            boxes.style.backgroundColor = "black";
        })
    })
}