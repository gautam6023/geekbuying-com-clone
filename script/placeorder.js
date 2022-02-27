var cartArr = JSON.parse(localStorage.getItem("addressDataBase")) || [];
console.log(cartArr);
displayData(cartArr);
function displayData(cartArr) {
  document.querySelector("#body").innerHTML = "";
  cartArr.map(function (elem, index) {
    var Name = document.createElement("p");
    var name = document.createElement("p");
    name.innerText = elem.name;
    Name.append(name);

    var Address = document.createElement("p");
    var address = document.createElement("p");
    address.innerText = elem.address;
    Address.append(address);

    var Zipcode = document.createElement("p");
    var zipcode = document.createElement("p");
    zipcode.innerText = elem.zipcode;
    Zipcode.append(zipcode);

    var Phonenumber = document.createElement("p");
    var phonenumber = document.createElement("p");
    phonenumber.innerText = elem.phonenumber;
    Phonenumber.append(phonenumber);

    document.querySelector("#body").append(Name, Address, Phonenumber, Zipcode);
  });
}
document.querySelector("#logoClick").addEventListener("click", function () {
  window.location.href = "index.html";
});
