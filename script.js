let slides = document.querySelectorAll(".slide"); // kalo <1
let slider = document.querySelector(".slider");
let index = 0; // counter

function showSlide(i) {
  index = (i + slides.length) % slides.length; // % -> reminders of division of (slide.lenght)/(slide.length), to show the ..th picture
  slider.style.transform = `translateX(${-index * 100}%)`; // - karna gambarnya ke opposite direction of target picture
}

document.querySelector(".next").onclick = () => showSlide(index + 1);
document.querySelector(".prev").onclick = () => showSlide(index - 1);

//Auto next every 10 000 ms -> 10s
//setInterval(() => showSlide(index + 1), 10000);
