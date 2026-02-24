// --- EXISTING SMOOTH SCROLL LOGIC ---
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// --- NEW LIGHTBOX LOGIC FOR ART PORTFOLIO ---

function openLightbox(element) {
  const title = element.querySelector('.tbd-text')?.innerText || "";
  const desc = element.querySelector('.full-description')?.innerText || "";
  const imgUrl = element.querySelector('.featured-img')?.src || "";

  const originalSrc = element.getAttribute("data-original");
  const updatedSrc = element.getAttribute("data-updated");

  // WEEK 3 → Compare mode
  if (originalSrc && updatedSrc) {
    document.getElementById("lightbox-original").src = originalSrc;
    document.getElementById("lightbox-updated").src = updatedSrc;

    document.getElementById("lightbox-title").innerText = title;
    document.getElementById("lightbox-desc").innerText = desc;

    document.getElementById("btn-original").href = originalSrc;
    document.getElementById("btn-updated").href = updatedSrc;

    document.getElementById("lightboxCompare").style.display = "flex";
    document.body.style.overflow = "hidden";
    return;
  }

  // WEEK 2 → Single image mode
  document.getElementById("lightbox-img").src = imgUrl;
  document.getElementById("lightbox-title-single").innerText = title;
  document.getElementById("lightbox-desc-single").innerText = desc;
  document.getElementById("lightbox-dl").href = imgUrl;

  document.getElementById("lightboxSingle").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightboxSingle() {
  document.getElementById("lightboxSingle").style.display = "none";
  document.body.style.overflow = "auto";
}

function closeLightboxCompare() {
  document.getElementById("lightboxCompare").style.display = "none";
  document.body.style.overflow = "auto";
}
// 4. Close Lightbox with 'Esc' key for better UX
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeLightboxSingle();
        closeLightboxCompare();
    }
});