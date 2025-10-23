const container = document.createElement("div");
const button = document.createElement("button");
container.classList.add("container");
document.body.appendChild(button)
document.body.appendChild(container);

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = "white";

button.textContent = "Change Grid Size";
button.style.margin = "10px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";

function createGrid(size){
    container.innerHTML = "";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.width = "90vmin";
    container.style.height = "90vmin";
    container.style.margin ="20px";
    container.style.border = "3px solid black";
    container.style.aspectRatio = "1/1";
    container.style.boxSizing = "border-box";   

    let div = [];
    for (let i=0;i<size;i++){
        let currdiv = [];
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        row.style.width = "100%";
        row.style.flex = "1";
        container.appendChild(row);

        for (let j=0;j<size;j++){
            const el = document.createElement("div");
            el.classList.add("cell");
            el.style.flex = "1";
            el.style.border = "1px solid black";
            el.style.backgroundColor = "white";
            el.style.boxSizing = "border-box";
            el.style.aspectRatio = "1/1";
            el.addEventListener("mouseenter", () => {
                el.style.backgroundColor = "blue";
            });
            currdiv.push(el);
            row.appendChild(el)
        }
        div.push(currdiv);
    }
}

createGrid(16);

button.addEventListener("click", () => {
    let input = prompt("Enter the number of squares per side (max 100):", "16");
    let size = parseInt(input);
    if (isNaN(size) || size < 1) size = 16;
    if (size > 100) size = 100;
    createGrid(size);
});