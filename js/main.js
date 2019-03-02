var link = document.querySelector (".sinteresting-form");
var popup = document.querySelector(".form-search");


link.addEventListener("click", function (evt) {

    popup.classList.toggle("modal-close");
   
});

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
    /*  if (popup.classList.contains("form-search")) {
        popup.classList.remove("form-search");
      }*/
    }
  });