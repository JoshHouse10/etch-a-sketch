const mainContainer = document.querySelector(".main-container");
const defaultNumberOfSquares = 16;


function defaultCanvas(defaultNumberOfSquares) {
    let totalNumberOfSquares = defaultNumberOfSquares * defaultNumberOfSquares;
    const squareWidthAndHeight = 100 / defaultNumberOfSquares;

    for(let i =0; i < totalNumberOfSquares; i++ ) {
        let square = document.createElement("div");
        square.classList.add("square-hover")
        square.style.cssText = `width: ${squareWidthAndHeight}%; height: ${squareWidthAndHeight}%; border: solid black;`;
        square.addEventListener("click", () => { square.style.backgroundColor = "black";});
        mainContainer.appendChild(square);
         };
    };

function setCanvas() {
    
    let numberOfSquares = Number(prompt("Enter the number of squares you would like for thr width and height of your canvas"));
    let totalNumberOfSquares = numberOfSquares * numberOfSquares;
    const squareWidthAndHeight = 100 / numberOfSquares;

    for(let i =0; i < totalNumberOfSquares; i++ ) {
        let square = document.createElement("div")
        square.style.cssText = `width: ${squareWidthAndHeight}%; height: ${squareWidthAndHeight};`
        mainContainer.appendChild(square)
    
    }

}

defaultCanvas(defaultNumberOfSquares)

