const gridContainer = document.querySelector("#grid-container");

function fillGrid(x, y) {

    for (let i = 1; i <= x * y; i++) {
        let gridElement = document.createElement("div");
        gridElement.style.width = `calc(100% / ${x})`;

        gridContainer.append(gridElement);
    }
}