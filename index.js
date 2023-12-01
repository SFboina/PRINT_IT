const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
] ;

// Sélectionner les éléments du DOM
const banner = document.getElementById("banner");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const bannerimg = document.querySelector(".banner-img")
const tagline = document.querySelector("#banner p")
// Définir l'index de l'image 
let currentIndex = 0;


// generation des dots en fonction du nombre de slide
const generateDots = () => {
  for(let i = 0; i < slides.length; i++) {
    dots.innerHTML += '<span class="dot"></span>'
  }
  // on récupère toutes les dots qu'on viens d'ajouter
  const allDots = document.querySelectorAll(".dot");
  allDots[currentIndex].classList.add("dot_selected")
}

generateDots()


// Fonction pour afficher l'image courante et le point correspondant
function showCurrentImage() {
bannerimg.src = 'images/'+slides[currentIndex].image
tagline.innerHTML = slides[currentIndex].tagLine


  // Désélectionner tous les points
  const allDots = document.querySelectorAll(".dot");
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected");
  }
  // Sélectionner le point correspondant
  allDots[currentIndex].classList.add("dot_selected");

}

// Fonction pour passer à l'image suivante
function nextImage() {
  // Augmenter l'index de l'image actuelle
  currentIndex++;
  // Si l'index dépasse le nombre d'images, revenir au début
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  showCurrentImage();
}

// Fonction pour passer à l'image précédente
function previousImage() {
  // Diminuer l'index de l'image actuelle
  currentIndex--;
  // Si l'index devient négatif, aller à la fin
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  showCurrentImage();
}

arrowLeft.addEventListener("click", previousImage);
arrowRight.addEventListener("click", nextImage);