// 5 characters each with objects
// Make this into an array to randomize it? Have other characters?

var sephy = {
    id: 0,
    name: "Sephiroth",
    hp: 400,
    attack: 50,
    counter: 20,
    image: "https://via.placeholder.com/100x100",
    defeatedImage: "https://via.placeholder.com/100x100",
}
var choco = {
    id: 1,
    name: "Chocobo",
    hp: 200,
    attack: 30,
    counter: 20,
    image: "https://via.placeholder.com/100x100",
    defeatedImage: "https://via.placeholder.com/100x100",
}
var cloud = {
    id: 2,
    name: "Cloud",
    hp: 280,
    attack: 20,
    counter: 20,
    image: "https://via.placeholder.com/100x100",
    defeatedImage: "https://via.placeholder.com/100x100",
}
var tifa = {
    id: 3,
    name: "Tifa",
    hp: 190,
    attack: 20,
    counter: 20,
    image: "https://via.placeholder.com/100x100",
    defeatedImage: "https://via.placeholder.com/100x100",
}
var barr = {
    id: 4,
    name: "Barrett",
    hp: 300,
    attack: 20,
    counter: 20,
    image: "https://via.placeholder.com/100x100",
    defeatedImage: "https://via.placeholder.com/100x100",
}

var player = {};
var enemy = {};

var bah = {
    name: "Bahamut",
    hp: 4000,
    attack: 20,
    counter: 100,
    image: "https://via.placeholder.com/100x100",
    defeatedImage: "https://via.placeholder.com/100x100",
}


// function random(char) {
//     var random = Math.floor(Math.random() * characters.length);
//     char = characters[random];
//     console.log(char);
//     char = characters[random].id;
// }

// if (char1 === char2 || char1 === char3 || char1 === char4) {
//     var random = Math.floor(Math.random() * characters.length);
//     characters[random];
// }


// // to randomize
// var char1 = Math.floor(Math.random() * characters.length);
// var char2 = Math.floor(Math.random() * characters.length);
// var char3 = Math.floor(Math.random() * characters.length);
// var char4 = Math.floor(Math.random() * characters.length);

// var char1 = characters[0];
// var char2 = characters[1];
// var char3 = characters[2];
// var char4 = characters[3];

$(document).ready(function () {

    $('#char1').attr("value", sephy.id).prepend("<img src=" + sephy.image + " >");
    $("#char1stats").prepend("HP: " + sephy.hp);
    $('#char2').prepend("<img src=" + barr.image + " >").attr("value", barr.id);
    $("#char2stats").prepend("HP: " + barr.hp);
    $('#char3').prepend("<img src=" + cloud.image + " >").attr("value", cloud.id);
    $("#char3stats").prepend("HP: " + cloud.hp);
    $('#char4').prepend("<img src=" + tifa.image + " >").attr("value", tifa.id);
    $("#char4stats").prepend("HP: " + tifa.hp);

    // var playerChosen = false;
    var enemyChosen = false;



    $(".char").on("click", function () {

        var playerChosen = this.value;
        console.log(playerChosen);

        $(".operator").on("click", function () {
            // $("#operator").text(this.value);
            operator = this.value;
            console.log(operator);
            operatorClicked = true;
        })


        // // Select Main character
        // if (playerChosen === false) {

        //     chosenChar = this;
        //     playerChosen = true;
        //     $(this).appendTo("#mainChar")
        //     $("#instruction").empty().append("You must now defeat the others, " +
        //         "choose wisely otherwise their attacks will destroy you. You will level up as you keep fighting.");


        //     // If selecting again, go to the enemy position
        // } else if (enemyChosen === false && this !== chosenChar) {
        //     chosenEnemy = this.value;
        //     $(this).appendTo("#enemyChosen")
        //     $("#instruction").empty().append("<h3>Fight to the death!");
        //     enemyChosen = true;
        //     console.log(chosenEnemy);

        //     $("#fight").append("<button>FIGHT!")
        // }
    });

    $("#fight").click(function () {
        if (enemyChosen === true) {

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
})