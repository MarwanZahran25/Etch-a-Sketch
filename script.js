// Select the container element
let container = document.querySelector('.container');

// Create 100 squares and append them to the container
for (i = 0; i < 100; i++) {
  container.appendChild(document.createElement('div')).classList.add('square');
}

// Select all the squares
let squares = document.querySelectorAll('.square');

// Function to toggle between black and white background color
function blackAndWhite(element) {
  if (element.style.backgroundColor == 'black') {
    element.style.backgroundColor = 'white';
  } else {
    element.style.backgroundColor = 'black';
  }
}

// Add event listener to each square for mouseover event
squares.forEach((square) => {
  square.addEventListener('mouseover', (e) => {
    blackAndWhite(e.target);
  });
});

// Function to create a new grid with a given size
function createGrid(size) {
  let squares = document.querySelectorAll('.container > div');
  
  // Remove existing squares
  squares.forEach((square) => {
    container.removeChild(square);
  });
  
  // Create and add new squares
  let width = 100 / size;
  for (let i = 0; i < size ** 2; i++) {
    container.appendChild(document.createElement('div')).classList.add('square');
  }
  
  // Select the new squares and update the flex basis
  let grid = document.querySelectorAll('.square');
  grid.forEach((square) => {
    square.style.flexBasis = `${width}%`;
  });
  
  // Add event listener to each square for mouseover event
  grid.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      blackAndWhite(e.target);
    });
  });
}

// Select the create button
const createBtn = document.querySelector('.create-grid');

// Add event listener to the create button
createBtn.addEventListener('click', () => {
  gridSize = prompt("Enter the size of the grid you want to create");
  if (gridSize > 100) {
    console.log('That\'s too much');
    return;
  } else {
    createGrid(gridSize);
  }
});

// Select the reset button
const resetBtn = document.querySelector('.reset');

// Add event listener to the reset button
resetBtn.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});
