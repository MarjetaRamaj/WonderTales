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


