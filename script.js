const gridContainer = document.querySelector("#grid-container");
const colorPicker = document.querySelector(".color-picker");
const gridSizeSelector = document.querySelector(".grid-size-selector");

function colorGridElement (element) {
    element.style.backgroundColor = colorPicker.value;
}

function fillGrid(x, y) {

    for (let i = 1; i <= x * y; i++) {
        let gridElement = document.createElement("div");
        gridElement.style.width = `calc(100% / ${x})`;

        gridElement.addEventListener("click", event => colorGridElement(event.target));

        gridElement.addEventListener("mouseover", event => {
            if (event.buttons === 1) { 
                colorGridElement(event.target);
            }
        });

        gridContainer.append(gridElement);
    }
}