var linkLogin = document.querySelector(".login-link");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".write-us-close");

var login = document.querySelector(".text_nameid");

linkLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add('active');
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove('active');
});

