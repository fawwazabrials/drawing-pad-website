let size = 16;
let clicked = false;
let fill = 'default'

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

function fillGrid(e) {
    if ((e.type === 'mouseover' && clicked) || (e.type === 'mousedown')) {
        if (fill === 'default') e.target.style.backgroundColor = 'black';
        if (fill === 'eraser') e.target.style.backgroundColor = 'transparent';
    }
}

function reset() {
    clearGrid();
    drawGrid(size);
    listen();
}

function listen() {
    // create event listener for click / no click
    document.querySelector('body').addEventListener('mousedown', (e) => clicked = true);
    document.querySelector('body').addEventListener('mouseup', (e) => clicked = false);

    // create event listeners for grid pixels
    gridItems = document.querySelectorAll('.grid-item');
    for (let i=0; i<gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', fillGrid);
        gridItems[i].addEventListener('mousedown', fillGrid);
    }

    // create event listener for reset button
    document.querySelector('.reset').addEventListener('click', reset);

    // create event listener for erase button; toggles eraser ON or OFF
    document.querySelector('.eraser').addEventListener('click', () => fill = fill === 'default' ? 'eraser' : 'default');
}

drawGrid(size);
listen();