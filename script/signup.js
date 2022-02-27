document.querySelector("#signup").addEventListener("submit", formSubmit);
var signupArr = JSON.parse(localStorage.getItem("signupDataBase")) || [];

function formSubmit(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  var signupObj = {
    name: name,
    email:email,
    password:password,
  };

  signupArr.push(signupObj);
  console.log(signupArr);
  localStorage.setItem("signupDataBase", JSON.stringify(signupArr));
  alert("Registration success & Now please login");
  window.location.href="login.html";
}