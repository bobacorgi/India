const image = document.querySelector(".natureimg");
const btn = document.querySelector(".btn");

btn.addEventListener("click",function () {
    console.log("Hello");
image.classList.toggle("changedimage");
});