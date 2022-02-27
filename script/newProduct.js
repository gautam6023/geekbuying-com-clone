let productData = JSON.parse(localStorage.getItem("newArrival"));

displayData(productData);
function displayData(productData) {
  document.querySelector("#products").innerHTML = "";
  productData.map(function (el, i, arr) {
    let perentDiv = document.createElement("div");
    perentDiv.addEventListener("click", function () {
      detailProductFun(i);
    });

    //Image container-->
    let imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage = "url" + "(" + el.image + ")";
    imgDiv.style.height = "200px";
    imgDiv.style.width = "100%";
    imgDiv.setAttribute("id", "perentImg");

    // let img = document.createElement("img");
    // img.setAttribute("src", el.image_url);
    // img.style.width = "100%";

    let newImg = document.createElement("img");
    newImg.setAttribute(
      "src",
      "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220111"
    );

    newImg.setAttribute("id", "newImg");
    imgDiv.append(newImg);

    // <---Img container ends
    let div = document.createElement("div");
    div.setAttribute("id", "product-details-con");
    let title = document.createElement("p");
    title.innerText = el.name;
    title.setAttribute("id", "title");

    //Price
    let price = document.createElement("p");
    price.setAttribute("id", "price");

    price.innerText = el.price;

    //
    let strikePrice = document.createElement("p");
    strikePrice.setAttribute("id", "sPrice");
    let sPrice = el.strikePrice;
    if (sPrice != undefined) {
      strikePrice.innerText = sPrice;
    } else {
      strikePrice.innerText = "";
    }

    div.append(title, price, strikePrice);

    let wishlishDiv = document.createElement("div");
    wishlishDiv.setAttribute("id", "wishlistCon");

    //icon and free shipping
    let span = document.createElement("span");
    span.innerHTML = "<i class='fa-regular fa-heart'></i>";
    span.setAttribute("id", "icon");

    let freeship = document.createElement("p");
    freeship.innerText = "Free shipping";

    wishlishDiv.append(span, freeship);

    perentDiv.append(imgDiv, imgDiv, div, wishlishDiv);
    // console.log(perentDiv);

    document.querySelector("#products").append(perentDiv);
  });
}

function priceSortFun() {
  var priceSort = document.querySelector("#sortByPrice").value;
  // console.log(priceSort);

  var minprice = document.querySelectorAll(".minmax")[0].value;
  var maxprice = document.querySelectorAll(".minmax")[1].value;
  console.log(minprice, maxprice);
  if (minprice.length > 0 && maxprice.length > 0) {
    if (minprice.length > 0 && maxprice.length == 0) {
      var filterPriceData = productData.filter(function (el) {
        return el.price.substring(1) > Number(minprice);
      });
    } else {
      var filterPriceData = productData.filter(function (el) {
        return (
          el.price.substring(1) < Number(maxprice) &&
          el.price.substring(1) > Number(minprice)
        );
      });
    }
    if (priceSort == "phl") {
      filterPriceData.sort(function (a, b) {
        return b.price.substring(1) - a.price.substring(1);
      });
      displayData(filterPriceData);
    } else if ((priceSort = "plh")) {
      filterPriceData.sort(function (a, b) {
        return a.price.substring(1) - b.price.substring(1);
      });
      displayData(filterPriceData);
    }
  } else {
    if (priceSort == "phl") {
      productData.sort(function (a, b) {
        return b.price.substring(1) - a.price.substring(1);
      });
      displayData(productData);
    } else if ((priceSort = "plh")) {
      productData.sort(function (a, b) {
        return a.price.substring(1) - b.price.substring(1);
      });
      displayData(productData);
    }
  }
}

function sortByName() {
  var minprice = document.querySelectorAll(".minmax")[0].value;
  var maxprice = document.querySelectorAll(".minmax")[1].value;
  if (minprice.length > 0 && maxprice.length > 0) {
    if (minprice.length > 0 && maxprice.length == 0) {
      var filterPriceData = productData.filter(function (el) {
        return el.price.substring(1) > Number(minprice);
      });
    } else {
      var filterPriceData = productData.filter(function (el) {
        return (
          el.price.substring(1) < Number(maxprice) &&
          el.price.substring(1) > Number(minprice)
        );
      });
    }
    filterPriceData.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    displayData(filterPriceData);
  } else {
    productData.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    displayData(productData);
  }
}

document
  .querySelector(".minmax+button")
  .addEventListener("click", priceRangeFun);

function priceRangeFun(event) {
  var minprice = document.querySelectorAll(".minmax")[0].value;
  var maxprice = document.querySelectorAll(".minmax")[1].value;
  console.log(typeof minprice, maxprice);
  if (minprice.length > 0 && maxprice.length == 0) {
    var filterPriceData = productData.filter(function (el) {
      return el.price.substring(1) > Number(minprice);
    });
  } else {
    var filterPriceData = productData.filter(function (el) {
      return (
        el.price.substring(1) < Number(maxprice) &&
        el.price.substring(1) > Number(minprice)
      );
    });
  }
  // filterPriceData =filterPriceData1 || filterPriceData2;
  displayData(filterPriceData);
}

function pageReloadFun() {
  window.location.reload();
}

function detailProductFun(index) {
  console.log(productData[index]);
  localStorage.setItem("clickedProduct", JSON.stringify(productData[index]));
  window.location.href = "productpage.html";
}

//----------------------------------Search

document.querySelector("#searchProduct").addEventListener("keyup", search);

function search() {
  let value = document.querySelector("#searchProduct").value;
  console.log(value);

  let filterData = productData.filter(function (el) {
    return el.name.includes(value);
  });
  displayData(filterData);
}
