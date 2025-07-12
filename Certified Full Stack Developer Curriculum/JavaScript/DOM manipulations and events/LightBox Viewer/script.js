const galleryItems = document.getElementsByClassName("gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImg = document.getElementById("lightbox-image");
const lightBoxCloseBtn = document.getElementById("close-btn");

for (const item of galleryItems) {
  item.addEventListener("click", function() {
    lightBox.style.display = "flex";
    lightBoxImg.src = item.src.replace("-thumbnail", "");
    
  })
}

lightBoxCloseBtn.addEventListener("click", function() {
  lightBox.style.display = "none";
})

lightBox.addEventListener("click", function() {
  lightBox.style.display = "none";
})
