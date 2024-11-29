const products = [
  {
    image: "images/5.jpg",
    name: "Wall Lamp",
    price: 300,
    desc:"Best Lamp to light up your Living Room",

  },
  {
    image: "images/1.jpg",
    name: "Bed",
    price: 3790,
    desc:"Best Comfortable Bed to have soundly sleep",

  },
  {
    image: "images/2.jpg",
    name: "Dressing Mirror",
    desc:"Best Dressing Mirror for asthetic Room",
    price: 899,
  },
  {
    image: "images/3.jpg",
    name: "Photo Frame",
    desc:"Best Photo Frame for your Family Photo",
    price: 389,
  },
  {
    image: "images/4.jpg",
    name: "Ceiling Lamp",
    desc:"Best Lamp to light up your Pathway Area",
    price: 159,
  },
  {
    image: "images/8.jpg",
    name: "Clock",
    desc:"Best Clock for the Asthetic Living Room",
    price: 289,
  },
];

const container = document.querySelector(".productContainer");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

products.forEach((product, index) => {
  const newProduct = `<div class="card">
          <div class="img">
            <img src=${product.image} alt=${product.name} />
          </div>
          <div class="text">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            
            <h5>$${product.price}</h5>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="btn">
            <button class="cart-shopping" 
             data-name="${product.name}"
             data-price="${product.price}"
             data-image="${product.image}">Add To Cart</button>
          </div>
        </div>`;
  container.innerHTML += newProduct;
});

document.querySelectorAll(".cart-shopping").forEach((cartButton) => {
  cartButton.addEventListener("click", (e) => {
    const product = {
      name: e.target.getAttribute("data-name"),
      price: e.target.getAttribute("data-price"),
      image: e.target.getAttribute("data-image"),
      quantity: 1,
    };
    console.log(product);

    const existingProduct = cart.find((pro) => pro.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart", cart);
  });
});
