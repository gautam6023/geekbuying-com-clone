var cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
// var admitted = JSON.parse(localStorage.getItem("admitted")) || [];
// var rejected = JSON.parse(localStorage.getItem("rejected")) || [];
console.log(cartArr);
displayData(cartArr);
function displayData(cartArr) {
  document.querySelector("#body").innerHTML = "";
  cartArr.map(function (elem, index) {
    var row = document.createElement("tr");

    var div = document.createElement("div");
    div.setAttribute("id", "imgCon");
    var img = document.createElement("img");
    img.setAttribute("src", elem.image);
    img.setAttribute("id", "imgIn");
    div.append(img);
    var col1 = document.createElement("td");
    col1.setAttribute("id", "name");
    col1.innerText = elem.name;

    var col2 = document.createElement("td");
    col2.innerText = elem.price;

    var col3 = document.createElement("td");
    let divQ = document.createElement("div");
    divQ.setAttribute("id", "divQ");
    let increase = document.createElement("button");
    increase.addEventListener("click", function () {
      incQuant(index);
    });
    increase.innerText = "+";
    increase.setAttribute("class", "incdc");
    let qunt = document.createElement("p");
    qunt.innerText = elem.quantity;
    qunt.setAttribute("id", "qunt");
    let decrease = document.createElement("button");
    decrease.addEventListener("click", function () {
      decQuant(index);
    });
    decrease.innerText = "-";
    decrease.setAttribute("class", "incdc");
    divQ.append(decrease, qunt, increase);
    col3.append(divQ);

    var col6 = document.createElement("td");
    col6.innerText = "₹" + Math.floor(elem.price.substring(1) * elem.quantity);
    col6.setAttribute("id", "totalQP");
    var col7 = document.createElement("td");
    let btn = document.createElement("button");
    btn.setAttribute("id", "delete");
    btn.innerText = "Delete";
    col7.append(btn);

    btn.addEventListener("click", () => {
      deleteItem(index);
    });

    row.setAttribute("class", "spaceBetweenTd");
    row.append(div, col1, col2, col3, col6, col7);
    document.querySelector("#body").append(row);
  });
}

showTotal();
function incQuant(index) {
  document.querySelectorAll("#qunt")[index].innerText = cartArr[index]
    .quantity++;

  localStorage.setItem("cartData", JSON.stringify(cartArr));
  showTotal();
  displayData(cartArr);
}

function decQuant(index) {
  if (cartArr[index].quantity > 1) {
    document.querySelectorAll("#qunt")[index].innerText = cartArr[index]
      .quantity--;
    showTotal();

    localStorage.setItem("cartData", JSON.stringify(cartArr));

    // console.log(document.querySelectorAll("#totalQP")[index].innerText);
  } else {
    document.querySelectorAll("#qunt")[index].innerText = 1;
    localStorage.setItem("cartData", JSON.stringify(cartArr));
  }
  displayData(cartArr);
}

function showTotal() {
  var total = cartArr.reduce(function (acc, el) {
    return acc + el.price.substring(1) * el.quantity;
  }, 0);
  console.log(Math.floor(total));

  document.querySelector("#subTotal").innerText = Math.floor(total);

  localStorage.setItem("TotalValue", JSON.stringify(Math.floor(total)));
  // document.querySelector("#totalCount").innerText = total;
}

function deleteItem(index) {
  cartArr.splice(index, 1);
  localStorage.setItem("cartData", JSON.stringify(cartArr));
  displayData(cartArr);
  showTotal();
}
document.querySelector("#logoClick").addEventListener("click", function () {
  window.location.href = "index.html";
});
