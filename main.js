import menu from "./db.js"
import {buttonsData} from "./db.js"

// Html'den gelenler
const menuContainer=document.getElementById("menu-container");
const buttonsArea=document.getElementById("buttons-area");
// Sayfa yüklendiğinde ekrana yazılacak olan fonksiyonları çalıştır.
document.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    showButtons("all");
});

buttonsArea.addEventListener("click",searchCategory);


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

// kategori eğerlerine göre fşltreleme işlemi
function searchCategory(e){
      const category=e.target.dataset.category;

      const filteredMenu=menu.filter((menuItem)=>menuItem.category===category);
      
      if(category==="all"){
        displayMenuItems(menu);
        return;
      }
    //   filtrelenmiş diziyi ekrana bastırma
    displayMenuItems(filteredMenu);
    showButtons(category);
}


// menü butonlarını basacak fonksiyon
function showButtons(active){
    buttonsArea.innerHTML="";
    buttonsData.forEach((btn)=>{
        const buttonElement=document.createElement('button');

        // class eklme
        buttonElement.className="btn btn-outline-dark filter-btn";

        // yazıyı değiştirme
        buttonElement.innerHTML=btn.text;

        // datasetini değiştirme
        buttonElement.dataset.category=btn.data;

        if(buttonElement.dataset.category===active){
            buttonElement.classList.add("bg-dark");
            buttonElement.classList.add("text-light");

        }

        // Htmle gönderme
        buttonsArea.appendChild(buttonElement);
       
    });
}