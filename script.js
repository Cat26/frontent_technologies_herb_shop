let tea_products = document.querySelector(".tea-products");
let tea_images = tea_products.querySelectorAll("img");


function showDetails(){
    let selected_div = this.parentElement;
    let description = selected_div.querySelectorAll(".product-description");

    description.forEach(desc => desc.style.display = "block");
    selected_div.style.backgroundColor = "white";
    selected_div.classList.toggle('description-img');
    // this.style.width = "300px";
    // this.style.height ="200px";
}

tea_images.forEach(image => image.addEventListener("click", showDetails));