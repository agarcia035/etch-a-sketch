const body = document.querySelector('body');
body.style.textAlign = 'center';

const container = document.getElementById('container');
container.style.width = "960px";
container.style.height = "960px";
container.style.margin = '0 auto';

const input = document.querySelector('input');

const btn = document.querySelector('#gridSize');
btn.addEventListener('click', function(){
    container.innerHTML = "";
    createGrid(input.value);
});


function createGrid(numOfSquares) {
    if(numOfSquares <= 0) {
        defaultGrid();
    } else {
        for(i = 0; i < numOfSquares; i++) {
            let row = document.createElement('div');
            container.appendChild(row).className = "row"; 
            for(j = 0; j < numOfSquares; j++) {
                let column = document.createElement('div');
                column.style.width = calcDimension(numOfSquares) + "px";
                column.style.height = calcDimension(numOfSquares) + "px";
                row.appendChild(column).className = "column";
                column.addEventListener("mouseover", function(){
                    column.style.backgroundColor = generateRGB();
                });
            }
        }
    } 
}

function defaultGrid(){
    createGrid(16);
}

function calcDimension(numCells) {
    return 800 / numCells;
}

function generateRGB() {
    let color = '#' +Math.floor(Math.random()*16777215).toString(16);
    return color;
}

defaultGrid();