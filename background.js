const images = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg"];


let currentIndex = 0;

function setBackgroundImage() {
  const container = document.getElementById("main-container");
  
  const currentImage = images[currentIndex];
  container.style.backgroundImage = `url(${currentImage})`;
  
  
  container.style.transition = 'none';
  container.style.backgroundSize = "120% 120%";  
  
  setTimeout(() => {
    container.style.transition = 'background-size 6s ease-in-out';  
    container.style.backgroundSize = "100% 100%";  
  }, 50);  


  currentIndex = (currentIndex + 1) % images.length;
}


setBackgroundImage();

setInterval(setBackgroundImage, 6000);



