document.addEventListener("DOMContentLoaded", () => {
  /*
  loadInputHandler function will handle whatever image I pick will get that image location and setting attribute to src image tag that image I picked. 
  */
 const loadImage = document.getElementById("find-file");
 const loadInputHandler = e => {
   const imageFile = e.target.files[0];
   const imageElement = document.getElementById("image");
   imageElement.setAttribute("src", URL.createObjectURL(imageFile));
 };
 loadImage.onchange = loadInputHandler;
 
}, false);