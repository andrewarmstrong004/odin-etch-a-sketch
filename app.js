let rangeValue = document.getElementById("range");
let gridSize = document.getElementById("gridSize");

gridSize.innerText = rangeValue.value;

rangeValue.addEventListener('input', () => {
    let newGridSize = rangeValue.value
    gridSize.innerText = newGridSize;
}, false);

rangeValue.addEventListener('change', () => {
    let newGridSize = rangeValue.value
    buildGrid(newGridSize)
}, false);

function buildGrid(size = 16) {
    myGrid = document.getElementById("grid");
    myGrid.innerHTML = ''; 

    for(let row = 0; row < size; row++) {
        let rowId = `row_${row}`
        myGrid.innerHTML += `<div class="grid_row" id="${rowId}"></div>`
        for(let column = 0; column < size; column++) {
            let elementId = `grid_element_${row}_${column}`;
            document.getElementById(rowId).innerHTML += `<div class="grid_element" id="${elementId}"></div>`
        }
    }

    let gridRows = document.getElementsByClassName("grid_row");
    let gridElements = document.getElementsByClassName("grid_element");

    for(let element = 0; element < gridElements.length; element++) {

        gridElements[element].addEventListener("mouseover", function ( event ) {
            event.target.style["background-color"] = "black";
        }, false)
    }
;}

window.onload = () => {
    buildGrid(16);
}
