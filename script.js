/* =========================
   HAMBURGER MENU
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });

    // Menutup menu mobile setelah klik
    navMenu.classList.remove("show");

  });

});


/* =========================
   ANIMASI SCROLL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   FALLBACK GAMBAR
========================= */

function handleImageError(image){

  image.onerror = null;

  image.src =
    "https://via.placeholder.com/600x400?text=Gambar+Belum+Ditambahkan";

}