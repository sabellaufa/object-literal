const products = [
    { id: 1, name: "Indomie", harga: 10000 },
    { id: 2, name: "Minyak Goreng", harga: 20000 },
    { id: 3, name: "Kopi Torabika", harga: 15000 },
  ];
  
  let cart = [];
  
  function displayProduct() {
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("card");
      productCard.innerHTML = ` <h3>${product.name}</h3>
          <p>Harga: RP.${product.harga}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
          `;
      productList.appendChild(productCard);
    });
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id == productId);
    cart.push(product);
    displayCart();
  }
  function displayCart() {
    const cartList = document.getElementById("cart-list");
    const totalHargaElement = document.getElementById("total-harga");
  
    cartList.innerHTML = "";
  
    let totalHarga = 0;
    cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${item.name} - Rp.${item.harga}`;
      cartList.appendChild(cartItem);
  
      // Hitung total harga
      totalHarga += item.harga;
    });
  
    // Tampilkan total harga
    totalHargaElement.textContent = totalHarga;
  }
  
  // Panggil fungsi untuk menampilkan produk
  displayProduct();
