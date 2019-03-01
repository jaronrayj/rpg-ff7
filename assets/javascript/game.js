// 5 characters each with objects
// Make this into an array to randomize it? Have other characters?
var characters = [
    sephy = {
        name: "Sephiroth",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/50x50",
        defeatedImage: "https://via.placeholder.com/50x50",
    },
    choco = {
        name: "Chocobo",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/50x50",
        defeatedImage: "https://via.placeholder.com/50x50",
    },
    cloud = {
        name: "Cloud",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/50x50",
        defeatedImage: "https://via.placeholder.com/50x50",
    },
    tifa = {
        name: "Tifa",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/50x50",
        defeatedImage: "https://via.placeholder.com/50x50",
    },
    barr = {
        name: "Barrett",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/50x50",
        defeatedImage: "https://via.placeholder.com/50x50",
    }
]

var bossArray = [
    bah = {
        name: "Bahamut",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/50x50",
        defeatedImage: "https://via.placeholder.com/50x50",
    }
]

var char1 = characters[Math.floor(Math.random() * characters.length)]
var char2 = characters[Math.floor(Math.random() * characters.length)]
var char3 = characters[Math.floor(Math.random() * characters.length)]
var char4 = characters[Math.floor(Math.random() * characters.length)]


$('#char1').prepend("<img src=" + char1.image + " >");
$('#char2').prepend("<img src=" + char2.image + " >");
$('#char3').prepend("<img src=" + char3.image + " >");
$('#char4').prepend("<img src=" + char4.image + " >");

var mainCharChosen = false;
var chosenChar;

if (mainCharChosen === false) {
    $(".char").click(function () {
        mainCharChosen = true;
        chosenChar = this;
        this.attr("id", "mainChar");

    });
}



// $("https://via.placeholder.com/50x50character").on.("click", function {

//     move to character location

//     var chosenChar = this

//     chosenChar = true

// })

// Mention Leveling up in text

// Defeat all the other foes

// Choose wisely!click on another enemy to attack

// function attack(character) {

//     on click attack specific character chosen;

//     enemy.hp - attack

//     chosencharacter.hp - counter

//     display health
//     for both characters

//     attack += attack

// }

// if (chosenChar = true) {

// } else if (chosencharacter.hp === 0) {

//     gameover

// } else if (enemy.hp === 0) {

//     defeated image

//     choose new character

// } else if (enemy1.hp === 0 && enemy2.hp === 0 && enemy3.hp === 0) {

//     Victory music!

//         Battle Bahamut appears

// }