/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {}
document.createElement(article);
document.createElement(h3, templeName);
document.createElement(img, img.src = imageURL, alt = location);
document.appendChild(h3, img);
templesElement.appendChild(article);

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
    }
    displayTemples(templeList);
}

/* reset Function */
document.getElementById("article").reset();

/* sortBy Function */
sortBy = function(temples) {
    document.getElementById("output").reset();
    filter = value("sortBy");
    switch (filter) {
        case utah:
            location = "Utah";
            break;
        case nonutah:
            location != "Utah";
            break;
        case older:
            dedicated < 1950;
            break;
        case all:
            temples;    
    }
}


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });