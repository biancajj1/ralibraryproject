const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-Menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){

  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//Inside the media Query

.hamburger.active .bar:nth-child(2){

  opacity: 0;
}

.hamburger.active .bar:nth-child(1){

transform:translateY(8px) rotate(45deg);

}

.hamburger.active .bar:nth-child(3){

  transform:translateY(-8px) rotate(-45deg);

}
