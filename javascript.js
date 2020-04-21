window.addEventListener("DOMContentLoaded", function() {

 // get the form elements defined in your form HTML above
 
 var form = document.getElementById("contact-form");
 var button = document.getElementById("contact-form-submit");
 var status = document.getElementById("contact-form-status");

 // Success and Error functions for after the form is submitted
 
 function success() {
   form.reset();
   button.style = "display: none";
   status.style = "color: #69C46D; text-align: center; padding-top: 20px";
   status.innerHTML = "הטופס נשלח בהצלחה! </br> נחזור אליכם בהקדם";
 }

 function error() {
   status.innerHTML = "אוי לא, קרתה שגיאה";
   status.style = "color: red ";
 }

 // handle the form submission event

 form.addEventListener("submit", function(ev) {
   ev.preventDefault();
   var data = new FormData(form);
   ajax(form.method, form.action, data, success, error);
 });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
 var xhr = new XMLHttpRequest();
 xhr.open(method, url);
 xhr.setRequestHeader("Accept", "application/json");
 xhr.onreadystatechange = function() {
   if (xhr.readyState !== XMLHttpRequest.DONE) return;
   if (xhr.status === 200) {
     success(xhr.response, xhr.responseType);
   } else {
     error(xhr.status, xhr.response, xhr.responseType);
   }
 };
 xhr.send(data);
}