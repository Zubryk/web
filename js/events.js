document.addEventListener("DOMContentLoaded", alert("Welcome to my portfolio!"));
document.getElementById("contact-form-id").addEventListener("submit", validation);
var photo = document.getElementById("myphoto");
photo.addEventListener("mouseover", function() {
    photo.src = "img/incolor.jpg";
});
photo.addEventListener("mouseout", function() {
    photo.src = "img/myphoto.jpg";
});