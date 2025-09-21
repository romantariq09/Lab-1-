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
