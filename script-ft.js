let products= {
    data:[
    {
        productName: "Rapunzel",
        category:"EnchantedLove",
        image:"images/rapunzel.jpg",
    },
    {
        productName: "Cinderella",
        category:"KindnessAndCompassion",
        image:"images/cinderella.jpg",
    },
    {
        productName: "PeterPan",
        category:"CourageousAdventures",
        image:"images/peterpan.jpg",
    },
    {
        productName: "Ariel",
        category:"EnchantedLove",
        image:"images/ariel.jpg",
    },
    {
        productName: "Robin Hood",//qisaj ja ndrron kategorin veq kom desht mi provu kejt kategorit
        category:"WisdomAndWit",
        image:"images/robinhood.jpg",
    },
    {
        productName: "Hansel and Gretel",
        category:"CourageousAdventures",
        image:"images/hanselandgretel.jpg",
    },

],
};

for(let i of products.data)
    {
        //krijimi cards
    let card = document.createElement("div");

    //cards me kategori and should stay hidden initially
    card.classList.add("card", i.category, "hide");

    //fotoja
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //emri produktit
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //te kodi nvidedo qitu vjen price amo un si kom ato


    card.appendChild(container);
     document.getElementById("products").appendChild(card);

    }

//parameter passed from button (parameter same as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else{
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
    //display all cards on 'all' button click
    if(value == "All"){
        element.classList.remove("hide");
    }else {
        //check if element contains category class
        if(element.classList.contains(value)){
        //display element based on category
         element.classList.remove("hide");
        } else{
        //hide other elements
        element.classList.add("hide");
        }
    }
    });
}


//search butoni
document.getElementById("search").addEventListener
("click", () => {
    //initialization
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index)=> {
     //check a po pershtatet searchi me qat text
    if(element,innerText.includes(searchInput.toUpperCase())){
        //shfaqe matching card
    cards[index].classList.remove("hide");
    } else {
        //hide tjerat cards
    cards[index].classList.add("hide");
    }
    });
});

//display all products
window.onload = () => {
    filterProduct("All");
}