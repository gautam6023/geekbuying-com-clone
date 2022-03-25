var regusers = JSON.parse(localStorage.getItem("signupDataBase")) || [];
console.log(regusers);

document.querySelector("#login").addEventListener("submit", formSubmit);

var form = document.querySelector("#login");
function formSubmit(event) {
  event.preventDefault();

  var email = login.email.value;
  var password = login.password.value;

  console.log(email, password);

  var flag = 0;
  for (var i = 0; i < regusers.length; i++) {
    if (regusers[i].email == email && regusers[i].password == password) {
      flag++;
    } else {
      flag = 0;
    }
  }

  if (flag > 0) {
    alert("Login success");
    window.location.href = "home.html";
  } else {
    alert("Login Failed");
    window.location.href = "login.html";
  }
}

document.querySelector("#createAcc").addEventListener("click", function () {
  window.location.href = "signup.html";
});
document.querySelector("#submit").addEventListener("click", function () {
  window.location.href = "index.html";
});
