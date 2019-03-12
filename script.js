let tea_products = document.querySelector(".tea-products");
let tea_images = tea_products.querySelectorAll("img");
let modal = tea_products.querySelector(".modal")
let modal_img = tea_products.querySelectorAll("#tea-img");
let text = tea_products.querySelectorAll("#caption");

console.log(tea_products)

function showDetails(){
    modal.style.display = "block";

}

tea_images.forEach(image => image.addEventListener("click", showDetails));