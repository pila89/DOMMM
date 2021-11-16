var like = document.getElementsByClassName("fas fa-heart");
for (let i = 0; i < like.length; i++) {
    
  like[i].addEventListener("click", function () {
    if (like[i].style.color === "black") {
      like[i].style.color = "red";
    } else {
      like[i].style.color = "black";
    }
  });
}

var plus = document.querySelectorAll(".plus");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++;
    totalPrice();
  });
}

var minus = document.querySelectorAll(".minus");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.innerHTML > 0) {
      minus[i].previousElementSibling.innerHTML--;
    }
    totalPrice();
  });
}


var Del = document.querySelectorAll(".fa-times");
for (let i = 0; i < Del.length; i++) {
  Del[i].addEventListener("click", function () {
      console.log (Del[i].parentElement)
    Del[i].parentElement.remove();

 totalPrice();
  });
}


function totalPrice() {
  var itemPrice = document.querySelectorAll(".price");
  var qtt = document.querySelectorAll(".qte");
  var total = 0;
  for (let i = 0; i < itemPrice.length; i++) {
    total += itemPrice[i].innerHTML * qtt[i].innerHTML;
    document.getElementById("totalp").innerHTML = total;
    
  }
}

