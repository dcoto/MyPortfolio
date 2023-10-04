function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



  

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  var header = document.querySelector('header');

  for(var i= 0; i< reveals.length; i++){
    
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    }

    else{
      reveals[i].classList.remove('active');
    }

  }

}

document.addEventListener('scroll', () => {
  var header = document.querySelector('header');

if(window.scrollY > 0){
  header.classList.add('head-scrolled');
}
  else{
    header.classList.remove('head-scrolled');
  }
})


var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("./assets/coding.gif", "./assets/toad.png", "./assets/mario.png");


