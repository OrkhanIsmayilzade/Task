
// const Base_Url = "https://dummyjson.com";
const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
};

getData();


let totalPrice = 0;
const createCard = async () => {
    getData().then((data) => {    // Then neyniyir ???
        data.forEach((item) => {

            const card = document.createElement("div");
            card.style.width = "300px"
            card.style.height = "400px"
            card.style.border = "1px solid red";

            card.setAttribute("id", item.id); // ???

            const proId = document.createElement("h1");
            proId.innerText = item.id;

            const proTitle = document.createElement("h2");
            proTitle.innerText = item.title;

            const proDescription = document.createElement("h3");
            proDescription.innerText = item.description

            const proPrice = document.createElement("p");
            proPrice.style.color = "red";
            proPrice.innerText = item.price;

            const proImage = document.createElement("img");
            proImage.setAttribute("src", item.images[0]);
            proImage.style.width = "100px";
            proImage.style.height = "100px"

            const probrand = document.createElement("h1")
            probrand.style.color = "blue"
            probrand.innerText = item.brand

            const AddButton = document.createElement("button")
            AddButton.innerText = "Add";
            AddButton.style.margin = "10px";


            card.append(proId, proTitle, proDescription, proPrice, probrand, AddButton, proImage)
            document.querySelector("div").appendChild(card);

            AddButton.addEventListener("click", () => {
                const tbody = document.querySelector("tbody");
                const tr = document.createElement("tr");
                const tdId = document.createElement("td");
                const tdTitle = document.createElement("td");
                const tdPrice = document.createElement("td");
                tdId.textContent = item.id;
                tdTitle.textContent = item.title;
                tdPrice.textContent = item.price;
                tr.append(tdId, tdTitle, tdPrice);
                tbody.appendChild(tr);

                const totalPriceCount = document.querySelector(".totalPriceCount");
                totalPrice = totalPrice + parseInt(item.price);
                totalPriceCount.innerText=totalPrice;
                

            });

            const showBasketButton = document.querySelector(".showBasketButton");
            showBasketButton.addEventListener("click", ()=>{
                window.open("/JS/Task24( 02.11.)/index2.html")
            });





        });


    });
};





createCard();

