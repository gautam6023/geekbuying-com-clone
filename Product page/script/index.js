//Mapping data in con2

let con2Data = JSON.parse(localStorage.getItem("con2"));
console.log(con2Data);
displayCon2(con2Data);
function displayCon2(con2Data) {
  con2Data.map(function (el, i) {
    let div = document.createElement("div");
    div.setAttribute("id", "innerDiv");
    let img = document.createElement("img");
    img.setAttribute("src", el.image);

    div.append(img);

    document.querySelector("#con2").append(div);
  });
}
