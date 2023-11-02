
// const Base_Url = "https://dummyjson.com";
const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
};

getData();


const createCard = async() => {
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

            // const proImage = document.createElement("img");
            // proImage.innerText = item.thumbnail;
            // proImage.style.width = "50px";
            // proImage.style.height = "50px";

            const probrand = document.createElement("h1")
            probrand.style.color = "blue"
            probrand.innerText = item.brand

            const AddButton = document.createElement("button")
            AddButton.innerText = "Add"
           

            card.append(proId, proTitle, proDescription, proPrice, probrand, AddButton)
            document.querySelector("div").appendChild(card);






        });
    });
};

createCard();

