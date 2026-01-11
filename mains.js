const menu = document.getElementById("menu");
const remove = document.getElementById("remove");
const container = document.querySelector(".container");
menu.addEventListener("click", () => {
    container.classList.add("show-nav");
});

remove.addEventListener("click", () => {
    container.classList.remove("show-nav");
});
