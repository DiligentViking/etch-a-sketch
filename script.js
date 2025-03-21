function makeGrid(rows, columns) {
  const container = document.querySelector('#container');
  for (i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (j = 0; j < columns; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover', () => {
        square.classList.add('hover');
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

makeGrid(20, 20);


function wipeGrid() {
  document.querySelector('#container').remove();
  const newContainer = document.createElement('div');
  newContainer.setAttribute('id', 'container');
  document.querySelector('#super-container').appendChild(newContainer);
}

const rows = document.querySelector('#rows');
let numRows = rows.textContent.slice(6);
const cols = document.querySelector('#cols');
let numCols = rows.textContent.slice(6);

rows.addEventListener('click', () => {
  numRows = prompt('Enter number of rows', numRows);
  wipeGrid();
  makeGrid(numRows, numCols);
  rows.textContent = rows.textContent.slice(0, 6) + numRows;
})
cols.addEventListener('click', () => {
  numCols = prompt('Enter number of columns', numCols)
  wipeGrid();
  makeGrid(numRows, numCols);
  cols.textContent = cols.textContent.slice(0, 6) + numCols;
})
