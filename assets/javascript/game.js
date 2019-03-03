// 5 characters each with objects
// Make this into an array to randomize it? Have other characters?
var characters = [
    sephy = {
        id: 0,
        name: "Sephiroth",
        hp: 400,
        attack: 50,
        counter: 20,
        image: "./assets/images/sephy.gif",
        defeatedImage: "https://via.placeholder.com/150x150",
    },
    choco = {
        id: 1,
        name: "Chocobo",
        hp: 250,
        attack: 30,
        counter: 20,
        image: "./assets/images/choco.gif",
        defeatedImage: "https://via.placeholder.com/150x150",
    },
    cloud = {
        id: 2,
        name: "Cloud",
        hp: 280,
        attack: 20,
        counter: 20,
        image: "./assets/images/cloud.gif",
        defeatedImage: "https://via.placeholder.com/150x150",
    },
    tifa = {
        id: 3,
        name: "Tifa",
        hp: 190,
        attack: 20,
        counter: 20,
        image: "./assets/images/tifa.gif",
        defeatedImage: "https://via.placeholder.com/150x150",
    },
    barr = {
        id: 4,
        name: "Barrett",
        hp: 300,
        attack: 20,
        counter: 20,
        image: "./assets/images/barr.gif",
        defeatedImage: "https://via.placeholder.com/150x150",
    }
]

var bossArray = [
    bah = {
        name: "Bahamut",
        hp: 4000,
        attack: 20,
        counter: 150,
        image: "https://via.placeholder.com/150x150",
        defeatedImage: "https://via.placeholder.com/150x150",
    }
]

var char1 = characters[Math.floor(Math.random() * characters.length)]
var char2 = characters[Math.floor(Math.random() * characters.length)]
var char3 = characters[Math.floor(Math.random() * characters.length)]
var char4 = characters[Math.floor(Math.random() * characters.length)]



$('#char1').prepend("<img src=" + char1.image + " >").attr("value", char1.id);
$("#char1stats").prepend("<h5>" + char1.name).append("<h6>HP: " + char1.hp).append("<h6>Attack: " + char1.attack);
$('#char2').prepend("<img src=" + char2.image + " >").attr("value", char2.id);
$("#char2stats").prepend("<h5>" + char2.name).append("<h6>HP: " + char2.hp).append("<h6>Attack: " + char2.attack);
$('#char3').prepend("<img src=" + char3.image + " >").attr("value", char3.id);
$("#char3stats").prepend("<h5>" + char3.name).append("<h6>HP: " + char3.hp).append("<h6>Attack: " + char3.attack);
$('#char4').prepend("<img src=" + char4.image + " >").attr("value", char4.id);
$("#char4stats").prepend("<h5>" + char4.name).append("<h6>HP: " + char4.hp).append("<h6>Attack: " + char4.attack);

var mainCharChosen = false;
var chosenChar;
var currentEnemy = false;
var chosenEnemy;

$(".char").on("click", function () {

    // Select Main character
    if (mainCharChosen === false) {
        mainCharChosen = true;
        chosenChar = this;
        console.log(this.value);

        // Working code from calculator
        // $(".operator").on("click", function () {
        //     // $("#operator").text(this.value);
        //     operator = this.value;
        //     console.log(operator);
        //     operatorClicked = true;
        // })


        $(this).appendTo("#mainChar")
        $("#instruction").empty().append("You must now defeat the others, " +
            "choose wisely otherwise their attacks will destroy you. You will level up as you keep fighting.");


        // If selecting again, go to the enemy position
    } else if (currentEnemy === false && this !== chosenChar) {
        $(this).appendTo("#currentEnemy")
        $("#instruction").empty().append("<h3>Fight to the death!");
        currentEnemy = true;
        chosenEnemy = this;
        console.log(chosenEnemy);
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