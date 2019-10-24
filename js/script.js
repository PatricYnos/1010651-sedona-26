var hideForm=document.querySelector(".order-form-inner");
hideForm.classList.toggle("visually-hidden");
var link=document.querySelector(".form-hide");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  var form=document.querySelector(".order-form-inner");
  form.classList.toggle("visually-hidden");
});
