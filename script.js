document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Sadece biri aktif olabilir, diğerlerinden active sınıfını kaldır
            cards.forEach(c => c.classList.remove('active'));
            // Üzerine gelinen karta active sınıfını ekle
            card.classList.add('active');
        });
        
        // Mobil uyumluluk için tıklama olayını da ekleyelim
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});
