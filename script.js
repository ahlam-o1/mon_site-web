// Dans index.html
document.querySelector('.entree').addEventListener('click', () => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = "portfolio.html";
    }, 700); // Synchronisé avec la durée de la transition CSS
});
 
function openTab(tabName) {
    // Cache tous les contenus d'onglets
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Désactive tous les boutons d'onglets
    const tabButtons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    // Affiche l'onglet sélectionné
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

 // Effet 3D avancé sur les cartes
 document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.elite-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
            card.style.transform = `translateY(-15px) rotateX(${yAxis}deg) rotateY(${xAxis}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-15px) rotateX(0) rotateY(0) scale(1.02)';
        });
    });

    // Effet de parallaxe léger
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        document.querySelector('.light-grid').style.transform = `translateY(${scrollY * 0.3}px)`;
    });
});



