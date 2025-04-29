// Sélection des éléments
var box = document.getElementById('box'); // Conteneur de la boîte
var next = document.getElementById('next'); // Bouton "next"
var back = document.getElementById('back'); // Bouton "back"

// Tableau des URLs des images
var images = [
    "url('90.jpg')" , // Chemin de la première image
    "url('31pg.jpg')", // Chemin de la deuxième image
    "url('img12.jpg')", // Chemin de la troisième image
    "url('img11.jpg')" , // Chemin de la quatrième image
    "url('img14.jpg')",
    "url('img15.jpg')",
    "url('img16.jpg')",


];

var i = 0; // Index pour "next"
var j = images.length - 1; // Index pour "back"

// Événement pour le bouton "next"
next.addEventListener('click', function () {
    console.log("Next clicked, current index:", i);
    box.style.backgroundImage = images[i]; // Appliquer l'image
    i = (i + 1) % images.length; // Passer à l'image suivante
    console.log("Next index after update:", i);
});

// Événement pour le bouton "back"
back.addEventListener('click', function () {
    console.log("Back clicked, current index:", j);
    box.style.backgroundImage = images[j]; // Appliquer l'image
    j = (j - 1 + images.length) % images.length; // Passer à l'image précédente
    console.log("Back index after update:", j);
});





 