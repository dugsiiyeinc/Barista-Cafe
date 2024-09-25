const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

const icon = document.getElementById('icon');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
    console.log("a")
  } else {

    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});


// bg-js
const images = [
  // 'url("/images/baristas1.jpg")',
  'url("/images/baristas2.jpg")',
  'url("/images/baristas3.jpg")',
  'url("/images/baristas4.jpg")',
];
images.forEach(image => {
  const img = new Image();
  img.src = image;
});

let index = 0;

function changeBackground() {
  setTimeout(() => {
    document.getElementById('bg-image').style.backgroundImage = images[index];
  }, 10); // 10 milliseconds

  index = (index + 1) % images.length; 
}

setInterval(changeBackground, 4000);

changeBackground();