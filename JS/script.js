let button = document.querySelector(".button");
let body = document.querySelector(".body");
let buttonSpan = document.querySelector(".buttonSpan");



button.addEventListener("click", () => {
    body.classList.toggle("newBackground");

    buttonSpan.innerText = body.classList.contains("newBackground") ? "jasny" : "ciemny";
     
});












