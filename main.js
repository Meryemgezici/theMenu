import menu from "./db.js"

// Html'den gelenler
const menuContainer=document.getElementById("menu-container");
// Sayfa yüklendiğinde ekrana yazılacak olan fonksiyonları çalıştır.
document.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
})


function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map((item) => ` <div id="card" class="d-flex gap-3 flex-column flex-md-row">
    <img class="rounded shadow" src="${item.img}" alt="">
    <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success">${item.price}</p>
        </div>
        <p class="lead">${item.desc}</p>
    </div>
</div>`);

// diziyi aralarındaki virgülü silerek stringe çevirme
    displayMenu=displayMenu.join(' ');

    menuContainer.innerHTML=displayMenu;
}
