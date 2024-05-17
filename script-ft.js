let products = {
    //qitu po krijohen qato tdhanat e cards per nfront ku dalin te divi 'product' nfund 
    data: [
        {
            productName: "The Twelve Dancing Princesses",
            category: "CourageousAdventures",
            image: "images/dancingprincesses.jpeg",
        },
        {
            productName: "The Frog Prince",
            category: "EnchantedLove",
            image: "images/frogprince.jpg",
        },
        {
            productName: "Puss in Boots",
            category: "WisdomAndWit",
            image: "images/pussinboots.jpg",
        },
        {
            productName: "The Ugly Duckling",
            category: "KindnessAndCompassion",
            image: "images/uglyduckling.jpg",
        },
        {
            productName: "The Three Little Pigs",
            category: "CourageousAdventures",
            image: "images/threelittlepigs.jpg",
        },
        {
            productName: "Thumbelina",
            category: "KindnessAndCompassion",
            image: "images/thumbelina.jpg",
        },
        {
            productName: "The Bremen Town Musicians",
            category: "WisdomAndWit",
            image: "images/brementown.jpg",
        },
        {
            productName: "The Sleeping Beauty",
            category: "EnchantedLove",
            image: "images/sleepingbeauty.jpg",
        },
        {
            productName: "The Little Mermaid",
            category: "EnchantedLove",
            image: "images/littlemermaid.jpg",
        },
        {
            productName: "Pinocchio",
            category: "CourageousAdventures",
            image: "images/pinocchio.jpg",
        },
        {
            productName: "The Selfish Giant",
            category: "KindnessAndCompassion",
            image: "images/selfishgiant.jpg",
        },
        {
            productName: "Hansel and Gretel",
            category: "CourageousAdventures",
            image: "images/hanselandgretel1.jpg",
        },
        {
            productName: "The Emperor's New Clothes",
            category: "WisdomAndWit",
            image: "images/emperor.jpg",
        },
    ],
};

for (let i of products.data) {
    // krijimi cards nbaz qatyne tdhanav qe i krijum ma nalt
    let card = document.createElement("div");
    // cards me kategori dhe ato qe duhet mu mshef kur o nevoja
    card.classList.add("card", i.category, "hide");

     // Lidhja e fotove/storieve me faqen perkatse
     let link = document.createElement("a");
     if (i.productName === "The Twelve Dancing Princesses") {
         link.href = "stories/twelvedancingprincesses.html";
     } else if (i.productName === "The Frog Prince") {
         link.href = "stories/frogprince.html";
     } else if (i.productName === "Puss in Boots") {
        link.href = "stories/pussinboots.html";
     } else if (i.productName === "The Ugly Duckling") {
        link.href = "stories/uglyduckling.html";
     } 


    // fotoja
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", i.productName); 
    image.style.width = "100%";

    link.appendChild(image);
    // lidhja e anchor tag me card
    imgContainer.appendChild(link);
    card.appendChild(imgContainer);

    // container
    let container = document.createElement("div");
    container.classList.add("container");

    // emri produktit
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    // te kodi nvideo qitu vjen price amo un si kom ato muj me shtu ni pershkrim if needded 

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// parametri qe vjen kur klikohet butoni (parameter same as category)
function filterProduct(value) {
    // button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        // check nese tdhanat jane njejt me innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // select krejt cards
    let elements = document.querySelectorAll(".card");
    // loop naper cards
    elements.forEach((element) => {
        // mi shfaqe krejt cards te All butoni
        if (value == "All") {
            element.classList.remove("hide");
        } else {
            // me kqyr ni card a ka kategoi tcaktume
            if (element.classList.contains(value)) {
                // i shfaq cards nbaz kategoris
                element.classList.remove("hide");
            } else {
                // kur sfaqet kategoria specifike tjerat mu mshef
                element.classList.add("hide");
            }
        }
    });
}

// search butoni
document.getElementById("search").addEventListener("click", () => {
    // initialization
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    // loop through all elements
    elements.forEach((element, index) => {
        // check a po pershtatet searchi me qat text
        if (element.innerText.includes(searchInput)) {
            // shfaqe matching card
            cards[index].classList.remove("hide");
        } else {
            // hide tjerat cards
            cards[index].classList.add("hide");
        }
    });
});

// display all products
let pageSound; // Define the variable outside the onload function to make it accessible globally

window.onload = () => {
    filterProduct("All");
    pageSound = document.getElementById("page-sound");

    // Function to toggle audio playback
    function toggleAudio() {
        if (pageSound.paused) {
            pageSound.play();
        } else {
            pageSound.pause();
        }
    }

                //duhet me msu qka qysh tek o qiky kod, osht per background audion

    // Event listener to start/stop audio when clicking the page
    document.addEventListener('click', (event) => {
        const target = event.target;
        // Check if the click target is not the search input or buttons
        if (!target.matches('#search-input') && !target.matches('.button-value')) {
            toggleAudio();
        }
    });

    // Prevent audio pause/play when clicking the search input
    document.getElementById('search-input').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });

    // Prevent audio pause/play when clicking the buttons
    document.querySelectorAll('.button-value').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click event from propagating to the document
        });
    });
    // Prevent audio pause/play when clicking the search button
    document.getElementById('search').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });
};


