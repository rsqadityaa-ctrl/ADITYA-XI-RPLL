// Tahun Footer
document.getElementById('year').innerText = new Date().getFullYear();

// Animasi progress bar
document.querySelectorAll('.progress-bar').forEach(bar=>{
  setTimeout(()=>{ bar.style.width = bar.dataset.value; },300);
});

// Lightbox
const slides = document.querySelectorAll('.grid-gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

slides.forEach(img=>{
  img.addEventListener('click', ()=>{
    lightbox.style.display='flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', ()=>{
  lightbox.style.display='none';
});
