// Contoh JavaScript sederhana untuk efek scroll halus ke bagian tertentu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Anda bisa menambahkan JavaScript lain di sini, misalnya untuk:
// - Efek parallax di hero section
// - Validasi form kontak
// - Lightbox untuk galeri gambar
// - Carousel/slider untuk gambar menu atau galeri