let size = 50;

function makeGrid(gridSize) {
  const container = document.querySelector('#container');
  for (i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}



makeGrid(size);
