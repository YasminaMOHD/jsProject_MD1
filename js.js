const container=document.querySelector('.container .grid');
const resetBtn=document.querySelector('.container #clear_new');

//default grid 16 . 16
window.addEventListener("load", setDefaultGrid)
function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}
function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", changeColor);
        container.appendChild(gridElement);
    }
}
function changeColor(e) {
    e.target.style.backgroundColor = `rgba(0,0,0,.5)`;
}

// clear / change size of grid
resetBtn.addEventListener("click", changeSize);
function changeSize() {
    let newSize = prompt("Enter new size");

    if (newSize !== null) {
        //value in prompt as string -> change to int
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Enter a number from 1-64 range");
            changeSize();
        } else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

