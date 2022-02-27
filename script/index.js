var page1 = JSON.parse(localStorage.getItem("page1"));
function page1Fun() {
  page1.map(function (el) {
    var divTag = document.createElement("div");
    var name = document.createElement("h3");
    var aTag1 = document.createElement("a");
    // aTag1.setAttribute("href", el.url);
    aTag1.setAttribute("class", "dimOfName");
    aTag1.innerText = el.name;
    name.append(aTag1);
    var aTag2 = document.createElement("a");
    aTag2.setAttribute("href", el.url);
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", el.selection1);
    imgTag.setAttribute("class", "dimOfImage");
    aTag2.append(imgTag);
    divTag.append(name, imgTag);
    document.querySelector("#show1").append(divTag);
  });
}
page1Fun();

var container2Data = JSON.parse(localStorage.getItem("page2"));
function container2Fun() {
  container2Data.map(function (el) {
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "innerdiv");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", el.image);

    var priceTag = document.createElement("p");
    priceTag.innerText = el.price;
    priceTag.setAttribute("class", "para");

    var strikedTag = document.createElement("p");
    strikedTag.innerText = el.strikedprice;
    strikedTag.setAttribute("class", "para");

    var discountTag = document.createElement("p");
    discountTag.innerText = el.discount;
    discountTag.setAttribute("class", "para");

    divTag.append(imgTag, priceTag, strikedTag, discountTag);
    document.querySelector("#incontainer2").append(divTag);
  });
}

container2Fun();
var container3Data = JSON.parse(localStorage.getItem("container3"));

function container3Fun() {
  container3Data.map(function (el) {
    var divTag = document.createElement("div");

    var imgCon = document.createElement("div");
    imgCon.setAttribute("class", "imgCon");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", el.image);
    imgTag.setAttribute("class", "sizeC3img");
    imgCon.append(imgTag);

    var name = document.createElement("p");
    name.setAttribute("id", "titleCon2");
    name.innerText = el.name;
    var info = document.createElement("p");
    info.innerText = el.info;

    divTag.append(name, imgCon, info);
    document.querySelector("#container3").append(divTag);
  });
}
container3Fun();

var container4Data = JSON.parse(localStorage.getItem("container4"));

function container4Fun() {
  container4Data.map(function (el) {
    var divTag = document.createElement("div");
    divTag.setAttribute("id", "cardInCon4");
    // divTag.setAttribute("class","incontainer4")

    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", el.image);

    var name = document.createElement("p");
    name.innerText = el.name;

    var priceTag = document.createElement("p");
    priceTag.innerText = el.price;

    var strikedTag = document.createElement("p");
    if (el.strikedprice == undefined) {
      strikedTag.innerText = "";
    } else {
      strikedTag.innerText = el.strikedprice;
    }

    divTag.append(imgTag, name, priceTag, strikedTag);
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
    "translateX(-4500%)",
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
  if (count1 > arr.length) {
    count1 = arr.length;
  }
  if (count1 < 0) {
    count1 = 0;
  }

  console.log(index);
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
document
  .querySelector("#innercontainer5")
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
document
  .querySelector("#innercontainer5")
  .addEventListener("mouseleave", hidebuttonsFun);

function hidebuttonsFun(event) {
  event.target.firstElementChild.nextElementSibling.classList.add(
    "class",
    "fade"
  );
  event.target.firstElementChild.classList.add("class", "fade");
}

var container5Data = JSON.parse(localStorage.getItem("container5"));

function container5Fun() {
  container5Data.map(function (el) {
    var divTag = document.createElement("div");
    // divTag.setAttribute("class","incontainer5")

    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", el.image);

    var name = document.createElement("p");
    name.innerText = el.name;

    var priceTag = document.createElement("p");
    priceTag.innerText = el.price;

    var strikedTag = document.createElement("p");
    if (el.strikedprice == undefined) {
      strikedTag.innerText = "";
    } else {
      strikedTag.innerText = el.strikedprice;
    }

    divTag.append(imgTag, name, priceTag, strikedTag);
    document.querySelector("#innercontainer5").append(divTag);
  });
}

container5Fun();
var slides2 = document.querySelectorAll("#innercontainer5>div");
var count2 = 0;
function slide2Fun(index) {
  var arr3 = [
    "translateX(-500%)",
    "translateX(-1000%)",
    "translateX(-1500%)",
    "translateX(-2000%)",
    "translateX(-2500%)",
    "translateX(-3000%)",
    "translateX(-3500%)",
    "translateX(-4000%)",
    "translateX(-4300%)",
  ];
  var arr4 = [
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
  if (count2 > arr3.length) {
    count2 = arr3.length;
  }
  if (count2 < 0) {
    count2 = 0;
  }

  if (index > 0) {
    for (var i = 0; i < slides2.length; i++) {
      slides2[i].style.transform = arr3[count2];
    }
    count2++;
  }
  if (index < 0) {
    for (var i = 0; i < slides2.length; i++) {
      slides2[i].style.transform = arr4[count2];
    }
    count2--;
  }
}

var container6Data = JSON.parse(localStorage.getItem("container6"));

function container6Fun() {
  container6Data.map(function (el) {
    var mainDivTag = document.createElement("div");
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "innercontainer62");
    var mainImg = document.createElement("img");
    mainImg.setAttribute("src", el.image);

    var image1 = document.createElement("img");
    image1.setAttribute("src", el.image1);
    var image2 = document.createElement("img");
    image2.setAttribute("src", el.image2);

    if (el.image3 != undefined) {
      var image3 = document.createElement("img");
      image3.setAttribute("src", el.image3);
    }

    if (el.image4 != undefined) {
      var image4 = document.createElement("img");
      image4.setAttribute("src", el.image4);
    }
    if (el.image3 == undefined) {
      divTag.append(image1, image2);
    } else if (el.image4 == undefined) {
      divTag.append(image1, image2, image3);
    } else {
      divTag.append(image1, image2, image3, image4);
    }
    mainDivTag.append(mainImg, divTag);
    document.querySelector("#innercontainer61").append(mainDivTag);
  });
}

container6Fun();

var container7Data = JSON.parse(localStorage.getItem("container7"));
function container7Fun() {
  container7Data.map(function (el) {
    var divTag = document.createElement("div");
    // divTag.setAttribute("class","incontainer7")

    var imgCon = document.createElement("div");
    imgCon.setAttribute("id", "imgCon7");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", el.image);
    imgTag.setAttribute("id", "sizeC7img");
    imgCon.append(imgTag);

    var name = document.createElement("p");
    name.innerText = el.name;

    divTag.append(imgCon, name);
    document.querySelector("#innercontainer7").append(divTag);
  });
}
container7Fun();

var slides3 = document.querySelectorAll("#innercontainer7>div");
var count3 = 0;
function slide3Fun(index) {
  var arr5 = ["translateX(-500%)", "translateX(-1000%)"];
  var arr6 = ["translateX(0%)", "translateX(0%)", "translateX(-500%)"];
  if (count3 > arr5.length) {
    count3 = arr5.length;
  }
  if (count3 < 0) {
    count3 = 0;
  }
  if (index > 0) {
    for (var i = 0; i < slides3.length; i++) {
      slides3[i].style.transform = arr5[count3];
    }
    count3++;
  }
  if (index < 0) {
    for (var i = 0; i < slides3.length; i++) {
      slides3[i].style.transform = arr6[count3];
    }
    count3--;
  }
}

var container8Data = JSON.parse(localStorage.getItem("container8"));
function container8Fun() {
  container8Data.map(function (el) {
    var divTag = document.createElement("div");
    // divTag.setAttribute("class","incontainer8")
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", el.image);

    divTag.append(imgTag);
    document.querySelector("#innercontainer8").append(divTag);
  });
}
container8Fun();

var slides4 = document.querySelectorAll("#innercontainer8>div");
var count4 = 0;
function slide4Fun(index) {
  var arr7 = ["translateX(-800%)", "translateX(-1000%)"];
  var arr8 = ["translateX(0%)", "translateX(0%)", "translateX(-800%)"];
  if (count4 > arr7.length) {
    count4 = arr7.length;
  }
  if (count4 < 0) {
    count4 = 0;
  }

  if (index > 0) {
    for (var i = 0; i < slides4.length; i++) {
      slides4[i].style.transform = arr7[count4];
    }
    count4++;
  }
  if (index < 0) {
    for (var i = 0; i < slides4.length; i++) {
      slides4[i].style.transform = arr8[count4];
    }
    count4--;
  }
}
document
  .querySelector("#innercontainer7")
  .addEventListener("mouseenter", displaybuttonsFun);
document
  .querySelector("#innercontainer8")
  .addEventListener("mouseenter", displaybuttonsFun);

document
  .querySelector("#innercontainer7")
  .addEventListener("mouseleave", hidebuttonsFun);
document
  .querySelector("#innercontainer8")
  .addEventListener("mouseleave", hidebuttonsFun);
