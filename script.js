let size = 15;

function makeGrid(gridSize) {
  gridSize = gridSize * gridSize;
  const container = document.querySelector('#container');
  for (i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}


makeGrid(size);




// function makeGrid(rows, columns) {
//   const container = document.querySelector('#container');
//   for (i = 0; i < rows; i++) {
//     const row = document.createElement('div');
//     row.classList.add('row');
//     for (j = 0; j < columns; j++) {
//       const square = document.createElement('div');
//       square.classList.add('square');
//       square.addEventListener('mouseover', () => {
//         square.classList.add('hover');
//       });
//       row.appendChild(square);
//     }
//     container.appendChild(row);
//   }
// }
// makeGrid(8, 8);

