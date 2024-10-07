const gridContainer = document.querySelector("#grid-container");
const colorPicker = document.querySelector(".color-picker");
const gridSizeDisplay = document.querySelector(".grid-size-display");
const gridSizeSelector = document.querySelector(".grid-size-selector");
const colorModeBox = document.querySelector("#color-mode");
const rainbowModeBox = document.querySelector("#rainbow-mode");
const eraserBox = document.querySelector("#eraser");

function getRandomRGB() {
    return Math.floor(Math.random() * 255);
}

function colorGridElement (element) {
    if (colorModeBox.checked) {
        element.style.backgroundColor = colorPicker.value;

    } else if (rainbowModeBox.checked) {
        element.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;

    } else if (eraserBox.checked) {
        element.style.backgroundColor = "#FFFFFF";
    }
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

gridSizeSelector.addEventListener("input", event => {
    gridSizeDisplay.textContent = `${event.target.value} x ${event.target.value}`;
});

gridSizeSelector.addEventListener("change", event => {
    gridContainer.replaceChildren();
    fillGrid(event.target.value, event.target.value);
});

document.querySelector("#sidebar").addEventListener("click", event => {
    if (event.target.type === "checkbox") {
        if (!event.target.checked) {
            event.preventDefault();
            return false;
        }
        
        document.querySelectorAll("input[type=checkbox]").forEach(checkbox => {
            if (event.target !== checkbox) {
                checkbox.checked = false;
            }
        });
    }
});

fillGrid(gridSizeSelector.value, gridSizeSelector.value);