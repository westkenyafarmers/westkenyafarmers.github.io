function login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_login').style.opacity = "1";
  }, 400);

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, 200);
}

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.opacity = "1";
  }, 100);

  setTimeout(function() {
    document.querySelector('.cont_form_login').style.display = "none";
  }, 400);

  //location

}

function loadPage() {
  window.location.assign('buyer.html')
}

$("#submit-button").click(function(event) {
$(".subscribed").show(500);
$(".form-container front").hide(1000)
});



function ocultar_login_sign_up() {

  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, 500);

}

var app = angular.module('myApp',[]);

function login2() {
  window.location.assign('buyer.html')
}
