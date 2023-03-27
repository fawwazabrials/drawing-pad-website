let size = 16;
let clicked = false;
let fillType = 'default'

const grid = document.querySelector('.grid');
const body = document.querySelector('body')

function drawGrid() {
/* Draw grid on grid container based on size */

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


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

function resetGrid() {
    clearGrid()
    drawGrid();
    listenGrid();
}

function fillGrid(e) {
/* Fill grid with type.
    - 'default': fill with black
    - 'eraser': fill with white
    - 'rainbow': fill with random RGB color
    - 'shade': fill with increase of 10% opacity */

    if ((e.type === 'mouseover' && clicked) || (e.type === 'mousedown')) {
        if (fillType === 'default') e.target.style.backgroundColor = 'black';
    }
}

function listenGrid() {
/* Create event listeners for each grid items */

    // create event listener for click / no click
    body.addEventListener('mousedown', e => clicked = true);
    body.addEventListener('mouseup', e => clicked = false);

    // create event listeners for grid pixels
    gridItems = document.querySelectorAll('.grid-item');
    for (let i=0; i<gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', fillGrid);
        gridItems[i].addEventListener('mousedown', fillGrid);
    }
}

drawGrid();
listenGrid()