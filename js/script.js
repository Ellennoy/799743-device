var linkLogin = document.querySelector(".login-link");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".write-us-close");

var login = popup.querySelector(".text_nameid");
// ("[name = text_nameid]")
var email = popup.querySelector(".text_e-mail");
// ("[name = text_e-mail]")
var lettertext = popup.querySelector(".free_form");
// ("[name = free_form]")
var isStorageSupport = true;

var form = document.querySelector('.write-us');
// var storage = localStorage.getItem("login");
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

linkLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add('active');
  if (storage) {
    login.value = storage;
    email.focus();
  }
  else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove('active');
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !lettertext) {
    evt.preventDefault();
    console.log(evt);
    console.log(form);
    popup.classList.add("modal-error");
    // popup.offsetWidth = popup.offsetWidth;
    popup.classList.remove("modal-error");
  }
  else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("active")) {
      popup.classList.remove("active");
      popup.classList.remove("modal-error");
    }
  }
});
var minmap = document.querySelector(".contact-link-map");
var maxmap = document.querySelector(".map");
var maxmapclose = document.querySelector(".map");
console.log(minmap);
minmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  maxmap.classList.add('active');
});
maxmapclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  maxmap.classList.remove('active');
});
