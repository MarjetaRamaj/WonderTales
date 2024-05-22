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
            productName: "The Monkey And The Crocodile",
            category: "WisdomAndWit",
            image: "images/monkey.jpg",
        },
        {
            productName: "Cinderella",
            category: "EnchantedLove",
            image: "images/cinderella1.jpg",
        },
        {
            productName: "Peter Pan",
            category: "CourageousAdventures",
            image: "images/peterpan.jpg",
        },
        {
            productName: "The Little Red Riding Hood",
            category: "WisdomAndWit",
            image: "images/kesulkuqja.png",
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
     else if (i.productName === "The Three Little Pigs") {
        link.href = "stories/threelittlepigs.html";
     }else if (i.productName === "Thumbelina") {
        link.href = "stories/thumbelina.html";
     }else if (i.productName === "The Bremen Town Musicians") {
        link.href = "stories/brementown.html";
     }else if (i.productName === "The Sleeping Beauty") {
        link.href = "stories/sleepingbeauty.html";
     }
     else if (i.productName === "The Little Mermaid") {
        link.href = "stories/littlemermaid.html";
     }else if (i.productName === "Pinocchio") {
        link.href = "stories/pinocchio.html";
     }else if (i.productName === "The Selfish Giant") {
        link.href = "stories/selfishgiant.html";
     }else if (i.productName === "Hansel and Gretel") {
        link.href = "stories/hanselandgretel.html";
     }
     else if (i.productName === "The Monkey And The Crocodile") {
        link.href = "stories/monkeyandcrocodile.html";
     }else if (i.productName === "Cinderella") {
        link.href = "stories/cinderella.html";
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

