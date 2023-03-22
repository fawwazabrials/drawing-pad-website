const DEFAULT_SIZE = 16;
let clicked = false;

const grid = document.querySelector('.container');

function drawGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i=0; i<size*size; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.ondragstart = () => false;
        grid.appendChild(gridItem);
    }
}

function clearGrid() {
    grid.innerHTML = '';
}

function fillGrid(el) {
    if (clicked) {
        el.target.style.backgroundColor = 'black';
    }
}

function listen() {
    // create event listener for click / no click
    document.querySelector('body').addEventListener('mousedown', (e) => clicked = true);
    document.querySelector('body').addEventListener('mouseup', (e) => clicked = false);

    // create event listeners for grid pixels
    gridItems = document.querySelectorAll('.grid-item');
    for (let i=0; i<gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', fillGrid);
    }
}

drawGrid(DEFAULT_SIZE);
listen();