const menu = document.getElementById("menu");
const remove = document.getElementById("remove");
const container = document.querySelector(".container");
const boxCircle = document.querySelector(".boxCircle");
menu.addEventListener("click", () => {
    container.classList.add("show-nav");
    boxCircle.classList.add("boxCircleChange");
});

remove.addEventListener("click", () => {
    container.classList.remove("show-nav");
    boxCircle.classList.remove("boxCircleChange");
});
