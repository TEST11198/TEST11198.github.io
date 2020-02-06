let btn = document.querySelector(".btn");
let cards = document.querySelectorAll(".items");
let price = document.querySelectorAll(".price");
let it = [];
let catalog = document.querySelector(".catalog");

btn.addEventListener("click", function() {
    let items = [...cards];
    items.sort(function(a, b) {
        let priceA = a.querySelector(".price").innerHTML;
        let priceB = b.querySelector(".price").innerHTML;

        return priceA - priceB;
    });

    catalog.innerHTML = "";

    for (let i=0; i<items.length; i++) {
        catalog.innerHTML += items[i].outerHTML; 
    }
});