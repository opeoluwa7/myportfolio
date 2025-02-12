//global data variable
let data;

//this fetches the data from the data.json and then passes the data into the variable which is later passsed to the screen change function and onwards
fetch("../packageJson/data.json").then((response) => {

    return response.json();
}).then((jsonData) => {
    data = jsonData;

    handleScreenChange();
});

//mobile grid display
function renderMobileGrid() {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";

    [...data].reverse().forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${item.images.mobile}" alt="${item.title}">
        <a href="${item.src}">${item.title}</a>
        <hr>
        `;
        gridContainer.appendChild(card);
    });

}

//larger screen display
function renderDesktopGrid() {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";

    [...data].reverse().forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${item.images.desktop}" alt="${item.title}">
        <a href="${item.src}">${item.title}</a>
        <hr>
        `;
        gridContainer.appendChild(card);
    });

}


const largeScreen = window.matchMedia("(min-width: 40rem)");

largeScreen.addEventListener("change", handleScreenChange);

function handleScreenChange() {
    if (!data) return;

    if (largeScreen.matches) {
         renderDesktopGrid();
    } else {
         renderMobileGrid();
    }
}


