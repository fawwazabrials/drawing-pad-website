let size = 16;

const grid = document.querySelector('.grid');

function drawGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (let i=0; i<size*size; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        grid.appendChild(gridItem);
    }
}

drawGrid(size);