const gridContainer = document.querySelector("#grid-container");

function fillGrid(boxNum) {
    
    for (let i = 1; i <= boxNum; i++) {
        let gridElement = document.createElement("div");
        
        gridContainer.append(gridElement);
    }
}