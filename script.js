let container = document.querySelector('.container');
for (i=0;i<100;i++){
    container.appendChild(document.createElement('div')).classList.add('square')
}
let squares = document.querySelectorAll('.square');
function blackAndWhite(elment){
    if( elment.style.backgroundColor=='black'){
        elment.style.backgroundColor='white'
       }
       else{
        elment.style.backgroundColor='black'
       }
    
    }

squares.forEach((square)=>{
    square.addEventListener('mouseover',(e)=>{
        blackAndWhite(e.target)
    
    })})

function createGrid(size) {
    
   let squares =  document.querySelectorAll('.container > div')  
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
        grid.forEach((square)=>{
            square.addEventListener('mouseover',(e)=>{
                blackAndWhite(e.target)
            
            })})
      }
const createBtn = document.querySelector('.create-grid');
createBtn.addEventListener('click',()=>{
    gridSize=prompt("Enter the size of the grid you want to create")
    if (gridSize>100) {console.log('thats to much'); return}
    else createGrid(gridSize)
    
})
const ResetBtn = document.querySelector('.reset');
ResetBtn.addEventListener('click',()=>{
   let squares = document.querySelectorAll('.square');
   squares.forEach((square)=>{
    square.style.backgroundColor="white";
   })
})

      

      
      




