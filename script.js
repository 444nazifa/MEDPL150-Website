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
    // 1. Extract data from the clicked work-box
    const imgUrl = element.querySelector('.featured-img').src;
    const title = element.querySelector('.tbd-text').innerText;
    const desc = element.querySelector('.full-description').innerText;
    
    // 2. Populate the Lightbox elements
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxDl = document.getElementById('lightbox-dl');
    
    lightboxImg.src = imgUrl;
    lightboxTitle.innerText = title;
    lightboxDesc.innerText = desc;
    lightboxDl.href = imgUrl;
    
    // 3. Display the lightbox and disable background scrolling
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// 4. Close Lightbox with 'Esc' key for better UX
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});