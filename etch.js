let gridSize = 64;

function genDiv(size) {
    for (let i = 0; i < size * size; i++) {
        const grid = document.querySelector('.container');
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        const row = document.createElement('div');
        row.classList.add("row");
        row.addEventListener('mouseover', () => {
        row.style.backgroundColor = 'black';
         })
        grid.appendChild(row);

    }
}

genDiv(gridSize);
