const addbutton = document.getElementById("addButton");
const modal = document.querySelector(".container2");
const closebutton = document.querySelector(".close");
const savebutton = document.getElementsByClassName("save");
const ProductList = document.getElementById("card-list");

addbutton.addEventListener('click', function () {
    modal.style.display = 'block';
});

closebutton.addEventListener('click', function () {
    modal.style.display = 'none';
})



class Product {
    constructor(id, name, category, brand, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.price = price;
    }
}

for (let i = 0; i < savebutton.length; i++) {
    savebutton[i].addEventListener("click", function () {

        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const category = document.getElementById("category").value;
        const brand = document.getElementById("brand").value;
        const price = document.getElementById("price").value;

        const newProduct = new Product(id, name, category, brand, price)

        const ProductCard = document.createElement("div");
        ProductCard.classList.add("product-card");

        ProductCard.innerHTML = `
        <p>ID: ${newProduct.id}</p>
        <p>Name: ${newProduct.name}</p>
        <p>Category: ${newProduct.category}</p>
        <p>Brand: ${newProduct.brand}</p>
        <p>Price: ${newProduct.price}</p>`;

        ProductList.appendChild(ProductCard);
        document.querySelector(".productform").reset();

        modal.style.display = 'none';
    })
   
}

