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

function openNav() {
  document.getElementById("mySidepanel").style.width = "70%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
  document.getElementById("main").style.opacity = "0.2";
  document.getElementById("avatar").style.opacity = "0.2";
  document.getElementById("span2").style.opacity = "0.2";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("main").style.opacity = "1";
  document.getElementById("avatar").style.opacity = "1";
  document.getElementById("span2").style.opacity = "1";
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

function plusSlidesMain(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
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

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
