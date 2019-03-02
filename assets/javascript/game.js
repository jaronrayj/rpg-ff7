// 5 characters each with objects
// Make this into an array to randomize it? Have other characters?
var characters = [
    sephy = {
        name: "Sephiroth",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    },
    choco = {
        name: "Chocobo",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    },
    cloud = {
        name: "Cloud",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    },
    tifa = {
        name: "Tifa",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    },
    barr = {
        name: "Barrett",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    }
]

var bossArray = [
    bah = {
        name: "Bahamut",
        hp: 100,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    }
]

var char1 = characters[Math.floor(Math.random() * characters.length)]
var char2 = characters[Math.floor(Math.random() * characters.length)]
var char3 = characters[Math.floor(Math.random() * characters.length)]
var char4 = characters[Math.floor(Math.random() * characters.length)]


$('#char1').prepend("<img src=" + char1.image + " >");
$("#char1stats").prepend("HP: " + char1.hp);
$('#char2').prepend("<img src=" + char2.image + " >");
$("#char2stats").prepend("HP: " + char2.hp);
$('#char3').prepend("<img src=" + char3.image + " >");
$("#char3stats").prepend("HP: " + char3.hp);
$('#char4').prepend("<img src=" + char4.image + " >");
$("#char4stats").prepend("HP: " + char4.hp);

var mainCharChosen = false;
var chosenChar;
var currentEnemy = false;
var chosenEnemy;

$(".char").click(function () {

    // Select Main character
    if (mainCharChosen === false) {
        mainCharChosen = true;
        chosenChar = this;
        $(this).removeClass("char").appendTo("#mainChar")
        $("#instruction").empty().append("You must now defeat the others, " +
            "choose wisely otherwise their attacks will destroy you. You will level up as you keep fighting.");


        // If selecting again, go to the enemy position
    } else if (currentEnemy === false && this !== chosenChar) {
        $(this).appendTo("#currentEnemy")
        $("#instruction").empty().append("<h3>Fight to the death!");
        currentEnemy = true;
        chosenEnemy = this;
        $("#fight").append("<button>FIGHT!")
    }
});

$("#fight").click(function () {
    if (currentEnemy === true) {

    }

});


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