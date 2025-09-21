//  initializing variables
let characterName = "";
let age = 0;
let isSuperhero = false;
let specialPowers = [];
let favoriteFood = "";

// Arrays for random generation
const names = ["Captain Waffles", "Mister Pickle", "Lady Pancake", "Professor Bubble"];
const foods = ["pizza", "sushi", "ice cream", "tacos"];
const powers = ["fly faster than light", "turn invisible", "talk to animals", "shoot spaghetti from fingers"];

// Function to generate a random character description
function generateRandomCharacter() {
    characterName = names[Math.floor(Math.random() * names.length)];
    age = Math.floor(Math.random() * 100) + 1; // Age between 1 and 100
    isSuperhero = Math.random() < 0.5; // 50% chance
    favoriteFood = foods[Math.floor(Math.random() * foods.length)];
    specialPowers = [powers[Math.floor(Math.random() * powers.length)]];
    updateDescription();
}

// Functions to update character's age
function increaseAge() {
    age++;
    updateDescription();
}

function decreaseAge() {
    if (age > 0) age--;
    updateDescription();
}

// Function to update the character's description
function updateDescription() {
    const superheroText = isSuperhero ? "superhero" : "ordinary human";
    const description = `Meet ${characterName}, a ${age}-year-old ${superheroText} who loves ${favoriteFood} and can ${specialPowers[0]}!`;
    document.getElementById("characterDescription").textContent = description;
}

// Update name from input
function updateName() {
    const newName = document.getElementById("nameInput").value;
    if (newName.trim() !== "") {
        characterName = newName;
        updateDescription();
    }
}

// Update age from input
function updateAge() {
    const newAge = parseInt(document.getElementById("ageInput").value);
    if (!isNaN(newAge) && newAge > 0) {
        age = newAge;
        updateDescription();
    }
}

// Add event listeners
document.getElementById("generateButton").addEventListener("click", generateRandomCharacter);
document.getElementById("increaseAgeButton").addEventListener("click", increaseAge);
document.getElementById("decreaseAgeButton").addEventListener("click", decreaseAge);
document.getElementById("updateNameButton").addEventListener("click", updateName);
document.getElementById("updateAgeButton").addEventListener("click", updateAge)