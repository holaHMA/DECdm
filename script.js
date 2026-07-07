// Favoritos
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    this.textContent = this.textContent.includes("❤️") ? "💔 Quitar" : "❤️ Guardar";
  });
});

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Carrusel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

document.querySelector(".next").addEventListener("click", () => changeSlide(1));
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");
}

// Auto-play cada 4 segundos
setInterval(() => changeSlide(1), 4000);

// Modal galería
function openModal(img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = img.src;
  document.getElementById("caption").innerText = img.alt;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function toggleGallery() {
  let gallery = document.getElementById("extraGallery");
  gallery.style.display = gallery.style.display === "none" ? "grid" : "none";
}
