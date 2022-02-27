document.querySelector("#Address").addEventListener("submit", formSubmit);
var addressArr = JSON.parse(localStorage.getItem("adressDataBase")) || [];

function formSubmit(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var address = document.querySelector("#address").value;
  var zipcode = document.querySelector("#zipcode").value;
  var phonenumber = document.querySelector("#phonenumber").value;

  var addressObj = {
    name: name,
    address: address,
    zipcode: zipcode,
    phonenumber: phonenumber,
  };

  addressArr.push(addressObj);
  console.log(addressArr);
  localStorage.setItem("addressDataBase", JSON.stringify(addressArr));
  window.location.reload();
}

document.querySelector("#placeOrder").addEventListener("click", goToPayement);

function goToPayement() {
  window.location.href = "/payment.html";
}
