let data;

fetch("./data.json").then((response) => {

    return response.json();
}).then((jsonData) => {
    data = jsonData;

    handleScreenChange();
});


function renderMobileGrid() {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";

    [...data].reverse().slice(0, 5).forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${item.images.mobile}" alt="${item.title}">
        <a href="${item.src}">${item.title}</a>
        <hr>
        `;
        gridContainer.appendChild(card);
    });

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("weblink");
    const link = document.createElement("a");
    link.classList.add("link");
    link.href = "/websites";  
    link.innerText = "See all websites";

    linkContainer.appendChild(link);
    gridContainer.appendChild(linkContainer);
}

function renderDesktopGrid() {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";

    [...data].reverse().slice(0, 5).forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${item.images.desktop}" alt="${item.title}">
        <a href="${item.src}">${item.title}</a>
        <hr>
        `;
        gridContainer.appendChild(card);
    });


    const linkContainer = document.createElement("div");
    linkContainer.classList.add("weblink");
    const link = document.createElement("a");
    link.classList.add("link");
    link.href = "/websites";  
    link.innerText = "See all websites";

    linkContainer.appendChild(link);
    gridContainer.appendChild(linkContainer);


    /*
    const link = document.createElement("a");
    link.classList.add("link");
    link.href = "/websites";  
    link.innerText = "See all websites";
    gridContainer.appendChild(link);
    */
}


const tabletScreen = window.matchMedia("(min-width: 40rem)");

function handleScreenChange() {
    if (!data) return;

    if (tabletScreen.matches) {
         renderDesktopGrid();
    } else {
         renderMobileGrid();
    }
}

tabletScreen.addEventListener("change", handleScreenChange);
