let productData = JSON.parse(localStorage.getItem("topSellers"));

displayDaya(productData);
function displayDaya(productData) {
  productData.map(function (el, i, arr) {
    let perentDiv = document.createElement("div");

    //Image container-->
    let imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage = "url" + "(" + el.image + ")";
    imgDiv.style.height = "200px";
    imgDiv.style.width = "100%";
    imgDiv.setAttribute("id", "perentImg");

    // let img = document.createElement("img");
    // img.setAttribute("src", el.image_url);
    // img.style.width = "100%";

    // let newImg = document.createElement("img");
    // newImg.setAttribute(
    //   "src",
    //   "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220111"
    // );

    // newImg.setAttribute("id", "newImg");
    // imgDiv.append(newImg);

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
    let sPrice = el.strkePrice;
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
    console.log(perentDiv);

    document.querySelector("#products").append(perentDiv);
  });
}
