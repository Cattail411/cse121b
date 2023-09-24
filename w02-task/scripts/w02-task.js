/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Lily Peterson";
getCurrentYear;
profilePicture = "images/ Lily PDF.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profilePicture');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = getCurrentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt');



/* Step 5 - Array */
let food = ['Chicken', 'Mint chip ice cream'];
food.push('Dark chocolate');
foodElement.innerHTML += `<br>${favFoods}`;



