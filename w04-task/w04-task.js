/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Lily Peterson"
};
photo: 'images/ Lily PDF.JPG'
favoriteFoods: [
    'Chicken',
    'Mint Chocolate Chip Ice Cream'
],
hobbies = [
    'Reading',
    'Watching movies and TV shows',
    'Playing violin'
]

/* Populate Profile Object with placesLive objects */
placesLived = []
myProfile.placesLived.push(
    {
        place: 'Detroit, MI',
        length: '1 year'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent= myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').textContent = image.src;
document.querySelector('#name').textContent = image.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('length');
    dt.textContent = place;
    document.querySelector('#places-lived').appendChild(dt);
});
