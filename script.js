let size = 16;

function makeGrid(gridSize) {
  const container = document.querySelector('#container');
  for (i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');  // this doesn't work
    square.style.color = "black";
    container.appendChild(square);
  }
}



makeGrid(size);
