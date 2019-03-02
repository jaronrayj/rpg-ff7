// 5 characters each with objects
// Make this into an array to randomize it? Have other characters?
var characters = [
    sephy = {
        id: "sephy",
        name: "Sephiroth",
        hp: 400,
        attack: 50,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    },
    choco = {
        id: "choco",
        name: "Chocobo",
        hp: 200,
        attack: 30,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    },
    cloud = {
        id: "cloud",
        name: "Cloud",
        hp: 280,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    },
    tifa = {
        id: "tifa",
        name: "Tifa",
        hp: 190,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    },
    barr = {
        id: "barr",
        name: "Barrett",
        hp: 300,
        attack: 20,
        counter: 20,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    }
]

var bossArray = [
    bah = {
        name: "Bahamut",
        hp: 4000,
        attack: 20,
        counter: 100,
        image: "https://via.placeholder.com/100x100",
        defeatedImage: "https://via.placeholder.com/100x100",
    }
]

var char1 = characters[Math.floor(Math.random() * characters.length)]
var char2 = characters[Math.floor(Math.random() * characters.length)]
var char3 = characters[Math.floor(Math.random() * characters.length)]
var char4 = characters[Math.floor(Math.random() * characters.length)]



$('#char1').prepend("<img src=" + char1.image + " >").attr("id", char1);
$("#char1stats").prepend("HP: " + char1.hp);
$('#char2').prepend("<img src=" + char2.image + " >").attr("id", char2);
$("#char2stats").prepend("HP: " + char2.hp);
$('#char3').prepend("<img src=" + char3.image + " >").attr("id", char3);
$("#char3stats").prepend("HP: " + char3.hp);
$('#char4').prepend("<img src=" + char4.image + " >").attr("id", char4);
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
        $(this).appendTo("#mainChar")
        $("#instruction").empty().append("You must now defeat the others, " +
            "choose wisely otherwise their attacks will destroy you. You will level up as you keep fighting.");


        //Initialize array of objects.
        // let characters = [
        //     { id: 0, name: "Jhon" },
        //     { id: 1, name: "Sara" },
        //     { id: 2, name: "Domnic" },
        //     { id: 3, name: "Bravo" }
        // ],

        // //Find index of specific object using findIndex method.    
        // objIndex = characters.findIndex((obj => obj.name == chosenChar.name));

        // //Log object to Console.
        // console.log("Before update: ", characters[objIndex])

        // //Update object's name property.
        // characters[objIndex].name = "Laila"

        // //Log object to console again.
        // console.log("After update: ", characters[objIndex])


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