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
        selected_div.css("background-color", "#d0c7c7");
    });
});