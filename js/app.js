const itemsSlides = document.querySelectorAll(".container-slides img");
const nbSlide = itemsSlides.length;
const next = document.querySelector(".right");
const prev = document.querySelector(".left");
let count = 0;

next.addEventListener("click", () => {
  itemsSlides[count].classList.remove("active");
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  itemsSlides[count].classList.add("active");
});
prev.addEventListener("click", () => {
  itemsSlides[count].classList.remove("active");
  if (count == 0) {
    count = nbSlide - 1;
  } else {
    count--;
  }
  itemsSlides[count].classList.add("active");
});
