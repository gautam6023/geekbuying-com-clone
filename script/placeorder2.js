var totalArr = JSON.parse(localStorage.getItem("TotalValue")) || [];
console.log(totalArr);
var x = totalArr;
let countC = 0;
document.querySelector("#submitC").addEventListener("click", function () {
  value = document.querySelector("#couponInput").value;
  countC++;
  let priceAfterDiscount;
  if (countC == 1) {
    if (value == "masai30") {
      priceAfterDiscount = x - x * 0.3;
      document.querySelector("#gtotal").innerText =
        Math.floor(priceAfterDiscount);
      localStorage.setItem("TotalValue", Math.floor(priceAfterDiscount));

      alert("Congratulations, You saved 30% of your cart value");
    }
  } else {
    document.querySelector("#gtotal").innerText = x;
  }
});
console.log(x);

document.querySelector("#ntotal").innerText = x;
document.querySelector("#gtotal").innerText = x;
