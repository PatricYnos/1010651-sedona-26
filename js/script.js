var hideForm=document.querySelector(".order-form-inner");
hideForm.classList.toggle("order-form-inner-hide");
var link=document.querySelector(".form-hide");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  var form=document.querySelector(".order-form-inner");
  form.classList.toggle("order-form-inner-hide");
  form.classList.toggle("order-form-inner-show");
});
