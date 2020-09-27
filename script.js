const grid = document.querySelector("#grid");

function createGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let div = document.createElement("div");
        div.innerText = (div + 1);
        grid.appendChild(div).className = "grid-item";
    }
}

createGrid(4, 4);