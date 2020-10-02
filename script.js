const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#resetBtn");
const magicMode = document.querySelector("#magicMode");
const fadingMode = document.querySelector("#fadingMode");

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
addRandomColor();
})

//add event listener for generating and adding random background color to every .box
function addRandomColor() {

    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach((boxes) => {
        let r = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
        let g = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
        let b = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
        let randomColorString = "rgb(" + r + "," + g + "," + b + ")";

        boxes.addEventListener("mouseenter", () => {
            boxes.style.backgroundColor = randomColorString;
        })
    })
}

//fading mode button
fadingMode.addEventListener("click", () => {
    let userInput = prompt("Please enter the number of columns/rows for your new grid (e.g. 64 will create a 64x64 grid)");

while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
}

createGrid(userInput, userInput);
addFade();
})

let fadeCount = 0;
function countFade() {
    if (fadeCount <= 10) {
        fadeCount++;
    }

    else {
        fadeCount = 0;
        fadeCount++;
    }
    return fadeCount / 10;
}

//add event listener for fade effect to every .box
function addFade() {

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((boxes) => {
        boxes.style.backgroundColor = "black";
        let opacityValue = 0;
        boxes.style.opacity = opacityValue;

        boxes.addEventListener("mouseenter", () => {
            let fadeValue = countFade();
            let valueNum = fadeValue + opacityValue;
            let valueStr = valueNum.toString();
            boxes.style.opacity = valueStr;
        })
    })
}

