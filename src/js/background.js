const body = document.body;

const Imgs = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg"];
function randomImage() {
  const randomIndex = Math.floor(Math.random() * Imgs.length);
  const imageUrl = `./src/img/${Imgs[randomIndex]}`;

  body.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255,0.5)),url(${imageUrl})`;
}

randomImage();
