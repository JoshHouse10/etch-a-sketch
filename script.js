const defaultNumberOfSquares = 16;

//CREATE A FUNCTION THAT COLOURS THE SQUARES WHEN HOLDING AND THEN DRAGGING OVER SQUARES AND ALSO DOUBLE CLICK TO ERASE// 
function applyColor(square) {
    square.classList.add("black");
};

function eraseColor(square) {
    square.classList.add("erase");
};




function setCanvas(numberofSquares) {
    const mainContainer = document.querySelector(".main-container");
    let totalNumberOfSquares = numberofSquares * numberofSquares;
    const squareWidthAndHeight = 100 / numberofSquares;

    for(let i =0; i < totalNumberOfSquares; i++ ) {
        let square = document.createElement("div");
        square.classList.add("square-hover")
        square.style.cssText = `width: ${squareWidthAndHeight}%; height: ${squareWidthAndHeight}%;`;

        mainContainer.appendChild(square);

        square.addEventListener("click", (e) => {
            e.preventDefault(); 
            applyColor(square); 
        });

        square.addEventListener("dblclick", (e) => {
            e.preventDefault();
            eraseColor(square);
        });

        };
};


setCanvas(defaultNumberOfSquares)

