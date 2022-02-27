// var product1=
// {image:"https://img.gkbcdn.com/p/2022-02-09/Lenovo-Thinkplus-LP1-Pro-True-Wireless-Earphones-White-496226-0._w280_.jpg",
// name:"Lenovo Thinkplus LP1 Pro True Wireless Earphones Bluetooth 5.1 HIFI Gaming Headset - White",
// price: "₹1883.75",
// strikedprice:"₹2119.31",
// discount:"11% off"};
// localStorage.setItem("product1",JSON.stringify(product1))

var product1 = JSON.parse(localStorage.getItem("clickedProduct"));

var productmap = product1;
console.log(productmap);

var leftImgTag = document.createElement("img");
leftImgTag.setAttribute("src", productmap.image);
document.querySelector("#leftcontainer").append(leftImgTag);

var divTag = document.createElement("div");
var nameTag = document.createElement("h1");
nameTag.innerText = productmap.name;

var inDivTag1 = document.createElement("div");
inDivTag1.setAttribute("class", "info1");

var brandName = productmap.name.split(" ")[0];
var brandTag = document.createElement("p");
brandTag.innerText = "Brand:" + brandName;
console.log(productmap.name.split(" ")[0]);
var reviewsTag = document.createElement("p");
reviewsTag.innerText = "10 Reviews";
var answerTag = document.createElement("p");
answerTag.innerText = "0 Answered Questions";
var itemTag = document.createElement("p");
itemTag.innerText = "Item Code:496226";
inDivTag1.append(brandTag, reviewsTag, answerTag, itemTag);

var pricenameTag = document.createElement("p");
pricenameTag.innerText = "Price:";
var priceTag = document.createElement("p");
priceTag.innerText = productmap.price;
var strikedTag = document.createElement("p");
strikedTag.innerText = productmap.strikePrice;
// var discountTag = document.createElement("p");
// discountTag.innerText = productmap.discount;

document
  .querySelector("#pricecolumn")
  .append(pricenameTag, priceTag, strikedTag);

divTag.append(nameTag, inDivTag1);
document.querySelector("#inrightcontainer").append(divTag);

var container4Data = JSON.parse(localStorage.getItem("container4"));

function container4Fun() {
  container4Data.map(function (el) {
    var divTag = document.createElement("div");
    // divTag.setAttribute("class","incontainer4")

    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", el.image);

    var name = document.createElement("p");
    name.innerText = el.name;

    var priceTag = document.createElement("p");
    priceTag.innerText = el.price;

    divTag.append(imgTag, name, priceTag);
    document.querySelector("#innercontainer4").append(divTag);
  });
}

container4Fun();

var slides = document.querySelectorAll("#innercontainer4>div");
console.log(slides[20]);
var count1 = 0;
function slide1Fun(index) {
  var arr = [
    "translateX(-500%)",
    "translateX(-1000%)",
    "translateX(-1500%)",
    "translateX(-2000%)",
    "translateX(-2500%)",
    "translateX(-3000%)",
    "translateX(-3500%)",
    "translateX(-4000%)",
    "translateX(-4600%)",
  ];
  var arr2 = [
    "translateX(0%)",
    "translateX(0%)",
    "translateX(-500%)",
    "translateX(-1000%)",
    "translateX(-1500%)",
    "translateX(-2000%)",
    "translateX(-2500%)",
    "translateX(-3000%)",
    "translateX(-3500%)",
  ];
  console.log(index);
  if (count1 > arr.length) {
    count1 = arr.length;
  }
  if (count1 < 0) {
    count1 = 0;
  }

  if (index > 0) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.transform = arr[count1];
    }
    count1++;
  }
  if (index < 0) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.transform = arr2[count1];
    }
    count1--;
  }
}

document
  .querySelector("#innercontainer4")
  .addEventListener("mouseenter", displaybuttonsFun);

function displaybuttonsFun(event) {
  event.target.firstElementChild.nextElementSibling.classList.remove(
    "class",
    "fade"
  );
  event.target.firstElementChild.classList.remove("class", "fade");
}

document
  .querySelector("#innercontainer4")
  .addEventListener("mouseleave", hidebuttonsFun);
function hidebuttonsFun(event) {
  event.target.firstElementChild.nextElementSibling.classList.add(
    "class",
    "fade"
  );
  event.target.firstElementChild.classList.add("class", "fade");
}
// var cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
// console.log(cartArr);
// function cartMoveFun() {
//   cartArr.push(productmap);
//   localStorage.setItem("cartArr", JSON.stringify(cartArr));
// }

document.querySelector("#addToCart").addEventListener("click", getData);
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
function getData() {
  product1.quantity = 1;
  console.log(product1);
  cartData.push(product1);
  alert("Item added to your Cart");

  localStorage.setItem("cartData", JSON.stringify(cartData));
}
