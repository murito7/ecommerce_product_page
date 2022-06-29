function increment() {
  let crntValue = Number(document.getElementById("counting").value);

  document.getElementById("counting").value = crntValue + 1;
}

function decrement() {
  let crntValue = Number(document.getElementById("counting").value);

  if (crntValue - 1 > 0) {
    document.getElementById("counting").value = crntValue - 1;
  } else if (crntValue - 1 === 0) {
    document.getElementById("counting").value = 0;
  }
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function showDiv() {
  var x = document.getElementById("cart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function addToCart() {
  let quantity = Number(document.getElementById("counting").value);

  if (quantity === 0) {
    return alert("Quantity can't be 0");
  }

  let count = 0;
  count = quantity;
  document.getElementById("span2").style.display = "block";
  document.getElementById("span").style.display = "block";
  document.getElementById("span").innerHTML = count;

  let parentDiv = document.getElementsByClassName("cart-item")[0];
  parentDiv.style.display = "flex";

  let h5Parent = document.getElementsByClassName("item-details")[0];

  let getH5Element = document.getElementById("items-price");

  if (getH5Element !== null) {
    h5Parent.removeChild(getH5Element);
  }

  let pricePerUnit = 125;
  let total = quantity * pricePerUnit;

  let h5Element = document.createElement("h5");
  h5Element.setAttribute("id", "items-price");

  h5Element.innerHTML = `$${pricePerUnit}.00 x ${quantity}&nbsp; <strong>$${total}.00</strong>`;
  h5Element.style.display = "flex";

  let emptyCartText = document.getElementById("empty-cart");
  emptyCartText.style.display = "none";
  h5Parent.appendChild(h5Element);

  let checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.style.display = "block";
}

function removeFromCart() {
  let parentDiv = document.getElementsByClassName("cart-item")[0];
  parentDiv.style.display = "none";

  let checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.style.display = "none";

  let emptyCartText = document.getElementById("empty-cart");
  emptyCartText.style.display = "block";

  document.getElementById("counting").value = "0";
  document.getElementById("span").style.display = "none";
  document.getElementById("span2").style.display = "none";
}
