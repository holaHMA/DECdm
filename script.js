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

  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    let index = 0;

    function mostrarSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[i].classList.add("active");
    }

    setInterval(() => {
      index = (index + 1) % slides.length;
      mostrarSlide(index);
    }, 3000); // cada 3 segundos
  });



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
