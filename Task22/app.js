const addbutton = document.getElementById("addButton");
const modal = document.querySelector(".container2");
const closebutton = document.querySelector(".close")
class Product {
    constructor(id, name, category, brand, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.price = price;
    }
}

const Product1 = new Product("001", "knife", "kitchen equipment", "bosch", "100$");

console.log(Product1);

addbutton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closebutton.addEventListener('click',function(){
    modal.style.display = 'none';
})





