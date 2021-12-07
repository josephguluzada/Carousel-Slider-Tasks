const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const images = Array.from(document.querySelectorAll(".image"));


rightArrow.addEventListener("click", function () {
    const currentElement = document.querySelector(".slider .container .images .image.active");

    if (currentElement == images[images.length - 1]) {
        currentElement.classList.remove("active")
        images[0].classList.add("active")
    } else {
        currentElement.classList.remove("active")
        currentElement.nextElementSibling.classList.add("active")
    }
})

leftArrow.addEventListener("click", function () {
    const currentElement = document.querySelector(".slider .container .images .image.active");

    if (currentElement == images[0]) {
        currentElement.classList.remove("active")
        images[images.length - 1].classList.add("active")
    } else {
        currentElement.classList.remove("active")
        currentElement.previousElementSibling.classList.add("active")
    }
})