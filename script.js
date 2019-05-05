//galeria zdjęć
$(document).ready(function () {
    $(".show-details").click(function () {
        var selected_div = $(this).parent();
        selected_div.find(".product-description").show(500);
        selected_div.find(".close").show(500);
        selected_div.find("img").css({
            "width": "300px",
            "height": "250px",
            "cursor": "default"
        });
        selected_div.css("background-color", "white");
    });
    $(".close").click(function () {
        var selected_div = $(this).parent();
        selected_div.find(".product-description").hide();
        selected_div.find(".close").hide();
        selected_div.find("img").css({
            "width": "200px",
            "height": "150px",
            "cursor": "pointer"
        });
        // selected_div.css("background-color", "#d0c7c7");
        var class_name_of_sel_div = selected_div[0].className;
        if(class_name_of_sel_div == "yerba" || class_name_of_sel_div == "tea"){
            selected_div.css("background-color", "#d0c7c7");
        }
        else if (class_name_of_sel_div == "medicin"){
            selected_div.css("background-color", "#e6d8c9");
        }
    });
});

//zamówienie info
$(document).ready(function () {
    $(".info").click(function () {
        var form_el = $(this).parent();
        form_el.find(".alert").show(500);
    });
    $(".close-info").click(function () {
       var form_el = $(this).parent();
       form_el.hide();
    });
});

// dodaj do koszyka
const itemList = document.querySelector(".basket");

$(document).ready(function () {
    $(".add-button").click(function () {
        var selected_div = $(this).parent();
        var product = selected_div.find(".product-name");
        var product_name = product[0].innerText;
        var new_li = document.createElement("LI");
        var text_li = document.createTextNode(product_name);
        new_li.appendChild(text_li);
        itemList.appendChild(new_li);

    });
})