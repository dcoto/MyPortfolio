var menu = document.querySelector(".menu-links");
var icon = document.querySelector(".hamburger-icon");
var content = document.getElementById("hide");



function toggleMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  content.classList.toggle("hide");
  
}
  
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  

  for(var i= 0; i< reveals.length; i++){
    
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    }

    else{
      
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


let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
var header = document.querySelector('header');
window.addEventListener(
  'scroll',
  function handleScroll() {
    const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop) {
      console.log('scrolling down');
      header.classList.add('head-scrolled');
      menu.classList.remove("open");
      icon.classList.remove("open");
      content.classList.remove("hide");
      
      
      
    } else if (scrollTopPosition < lastScrollTop) {
      console.log('scrolling up');
     
      header.classList.remove('head-scrolled');
      
    }
    lastScrollTop =
      scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  },
  false,
);