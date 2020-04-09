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

  //resetbuttonHnader function will handle when reset button is clicked it will excute and set value to zero.
  const resetbutton = document.getElementById("reset-button");
  const resetbuttonHandler = e => {
    ranges.forEach(range => {
      range.value = 0;
    });
    Caman("#image", () => {
      this.revert(true);
    });
  };
  resetbutton.onclick = resetbuttonHandler;

  //filterButtonHandler function will handle when any of the filter button clicked it will excute.
  const filterButtonHandler = e =>  {
    Caman("#image", () => {
      this.revert(false);
      this[event.target.id]().render();
    });
  };
  const filterbuttons = document.querySelectorAll(".filter");
  filterbuttons.forEach(button => {
    button.onclick = filterButtonHandler;
  });

  //saveButtonHandler function will handle when any of the save button clicked it will excute.
  const saveButton = document.getElementById("save-button");
  const saveButtonHandler = e => {
    Caman("#image", () => {
      this.render(()=>{
        this.save("image.png");
      });
    });
  };
  saveButton.onclick = saveButtonHandler;

  //previewCrop function will collect all the number from width, height, x, y input and show preview of crop area.
  const previewCrop = () => {
    const width = Number(document.getElementById("width").value);
    const height = Number(document.getElementById("height").value);
    const x = Number(document.getElementById("x").value);
    const y = Number(document.getElementById("y").value);
    const canvas = document.getElementById("image");
    const context = canvas.getContext("2d");
    context.fillstyle = "rgba(0,0,0,0.5)";
    context.fillRect(x, y, width, height);
  };
  const preview = document.getElementById("preview");
  preview.onclick = previewCrop;
  
}, false);