let size = 16;
let clicked = false;
let fillType = 'default'

const grid = document.querySelector('.grid');
const body = document.querySelector('body');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');
const shade = document.querySelector('#shade');

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

/* BUTTONS */
function updateButtons(type) {
    fillType = fillType === type ? 'default' : type;

    if (fillType === 'eraser') {
        eraser.classList.add("btn-pressed");
        shade.classList.remove("btn-pressed");
        rainbow.classList.remove("btn-pressed");
    } else if (fillType === 'rainbow') {
        eraser.classList.remove("btn-pressed");
        shade.classList.remove("btn-pressed");
        rainbow.classList.add("btn-pressed");
    } else if (fillType === 'shade') {
        eraser.classList.remove("btn-pressed");
        shade.classList.add("btn-pressed");
        rainbow.classList.remove("btn-pressed");
    } else {
        eraser.classList.remove("btn-pressed");
        shade.classList.remove("btn-pressed");
        rainbow.classList.remove("btn-pressed");
    }
}

eraser.addEventListener('click', () => {
    updateButtons('eraser');
})

rainbow.addEventListener('click', () => {
    updateButtons('rainbow');
})

shade.addEventListener('click', () => {
    updateButtons('shade');
})



drawGrid();
listenGrid()