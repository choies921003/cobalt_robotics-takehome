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

 //changeSliderHandler function will handle slider effects. When slider changes function will excute. line 20 is getting what slider I am using and getting value of slider.
 const changeSliderHandler = e => {
  Caman("#image", function renderCaman() {
    this.revert(false);
    this[e.target.name](e.target.value).render();
  });
};

//ranges valuable will get all of the slider and storing them into list. forEach mathod is applying slide effect whenever a slider is moved.
  const ranges = document.querySelectorAll('input[type="range"]');
  ranges.forEach(range => {
    range.onchange = changeSliderHandler;
  });
  
}, false);