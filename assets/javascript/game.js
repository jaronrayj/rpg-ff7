// 5 characters each with objects
// Make this into an array to randomize it? Have other characters?
var characters = [
    sephy = {
        id: "char1",
        name: "Sephiroth",
        hp: 400,
        attack: 50,
        counter: 25,
        image: "./assets/images/sephy.gif",
        defeatedImage: "./assets/images/sephydead.png",
    },
    choco = {
        id: "char2",
        name: "Fat Chocobo",
        hp: 300,
        attack: 30,
        counter: 20,
        image: "./assets/images/chocoresize.gif",
        defeatedImage: "./assets/images/chocdead.png",
    },
    cloud = {
        id: "char3",
        name: "Cloud",
        hp: 350,
        attack: 35,
        counter: 30,
        image: "./assets/images/cloudresize.gif",
        defeatedImage: "./assets/images/clouddead.png",
    },
    tifa = {
        id: "char4",
        name: "Tifa",
        hp: 275,
        attack: 40,
        counter: 50,
        image: "./assets/images/tifaresize.gif",
        defeatedImage: "./assets/images/tifadead.png",
    },
    barr = {
        id: "char5",
        name: "Barrett",
        hp: 300,
        attack: 20,
        counter: 20,
        image: "./assets/images/barr.gif",
        defeatedImage: "https://via.placeholder.com/150x150",
    }
]


var victoryMusic = document.getElementById("victory");
var battleMusic = document.getElementById("battle");

battle();

function victory() {
    battleMusic.pause();
    battleMusic.currentTime = 0;
    victoryMusic.play();
}

function battle() {
    victoryMusic.pause();
    victoryMusic.currentTime = 0;
    battleMusic.play();
}

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

var char1 = characters[0]
var char2 = characters[1]
var char3 = characters[2]
var char4 = characters[3]

// Set up the different characters
function initiate() {
    $('#char1Image').empty().prepend("<img src=" + char1.image + " >").attr("value", char1.id);
    $("#char1stats").empty().prepend("<h5>" + char1.name).append("<h6>HP: " + char1.hp).append("<h6>Attack: " + char1.attack);
    $('#char2Image').empty().prepend("<img src=" + char2.image + " >").attr("value", char2.id);
    $("#char2stats").empty().prepend("<h5>" + char2.name).append("<h6>HP: " + char2.hp).append("<h6>Attack: " + char2.attack);
    $('#char3Image').empty().prepend("<img src=" + char3.image + " >").attr("value", char3.id);
    $("#char3stats").empty().prepend("<h5>" + char3.name).append("<h6>HP: " + char3.hp).append("<h6>Attack: " + char3.attack);
    $('#char4Image').empty().prepend("<img src=" + char4.image + " >").attr("value", char4.id);
    $("#char4stats").empty().prepend("<h5>" + char4.name).append("<h6>HP: " + char4.hp).append("<h6>Attack: " + char4.attack);
}

initiate();
var mainCharChosen = false;
var chosenChar;
var currentEnemy = false;
var chosenEnemy;
var defeat = false;
var wins = 0;


function reset() {
    wins = 0;
    mainCharChosen = false;
    chosenChar = "";
    currentEnemy = false;
    chosenEnemy = "";
    defeat = false;
    battle();
    $("#char1").appendTo("#start").addClass("col-md-3")
    $("#char2").appendTo("#start").addClass("col-md-3")
    $("#char3").appendTo("#start").addClass("col-md-3")
    $("#char4").appendTo("#start").addClass("col-md-3")
    $("#instruction").empty().append("Choose a main character");
    $("#fight").hide()
    char1.hp = 400
    char2.hp = 300
    char3.hp = 350
    char4.hp = 275
    char1.attack = 50
    char1.attack = 30
    char1.attack = 35
    char1.attack = 40

    initiate();

}


$("#char1").on("click", function () {
    if (mainCharChosen === false) {
        $(this).appendTo("#mainChar").removeClass("col-md-3");
        mainCharChosen = true;
        chosenChar = char1;
        $("#instruction").empty().append("You must now defeat the others, " +
            "choose wisely otherwise their attacks will destroy you. You will level up as you keep fighting.");

        // Select for Enemy instead
    } else if (currentEnemy === false && char1 !== chosenChar) {
        $(this).appendTo("#currentEnemy").removeClass("col-md-3");
        $("#instruction").empty().append("<h3>Fight to the death!");
        currentEnemy = true;
        chosenEnemy = char1;
        $("#fight").show().empty().append("<button>FIGHT!")
    }
});


$("#char2").on("click", function () {
    if (mainCharChosen === false) {
        $(this).appendTo("#mainChar").removeClass("col-md-3");
        mainCharChosen = true;
        chosenChar = char2;
        $("#instruction").empty().append("You must now defeat the others, " +
            "choose wisely otherwise their attacks will destroy you. You will level up as you keep fighting.");

        // Select for Enemy instead
    } else if (currentEnemy === false && char2 !== chosenChar) {
        $(this).appendTo("#currentEnemy").removeClass("col-md-3");
        $("#instruction").empty().append("<h3>Fight to the death!");
        currentEnemy = true;
        chosenEnemy = char2;
        $("#fight").empty().append("<button>FIGHT!")
    }
});


$("#char3").on("click", function () {
    if (mainCharChosen === false) {
        $(this).appendTo("#mainChar").removeClass("col-md-3");
        mainCharChosen = true;
        chosenChar = char3;
        $("#instruction").empty().append("You must now defeat the others, " +
            "choose wisely otherwise their attacks will destroy you. You will level up as you keep fighting.");

        // Select for Enemy instead
    } else if (currentEnemy === false && char3 !== chosenChar) {
        $(this).appendTo("#currentEnemy").removeClass("col-md-3");
        $("#instruction").empty().append("<h3>Fight to the death!");
        currentEnemy = true;
        chosenEnemy = char3;
        $("#fight").empty().append("<button>FIGHT!")
    }
});

$("#char4").on("click", function () {
    if (mainCharChosen === false) {
        $(this).appendTo("#mainChar").removeClass("col-md-3");
        mainCharChosen = true;
        chosenChar = char4;

        $("#instruction").empty().append("You must now defeat the others, " +
            "choose wisely otherwise their attacks will destroy you. You will level up as you keep fighting.");

        // Select for Enemy instead
    } else if (currentEnemy === false && char4 !== chosenChar) {
        $(this).appendTo("#currentEnemy").removeClass("col-md-3");
        $("#instruction").empty().append("<h3>Fight to the death!");
        currentEnemy = true;
        chosenEnemy = char4;
        $("#fight").empty().append("<button>FIGHT!")
    }
});

var wins;

$("#fight").click(function () {
    if (currentEnemy === true && defeat === false) {
        var pdisplay = "#" + chosenChar.id + "stats"
        var edisplay = "#" + chosenEnemy.id + "stats"

        var enemyCounter = chosenEnemy.counter;
        chosenChar.hp = chosenChar.hp - enemyCounter;
        chosenEnemy.hp = chosenEnemy.hp - chosenChar.attack;

        chosenChar.attack += 10;
        console.log("attack " + chosenChar.attack);
        $(pdisplay).empty().append("<h5>" + chosenChar.name).append("<h6>HP: " + chosenChar.hp).append("<h6>Attack: " + chosenChar.attack);
        $(edisplay).empty().append("<h5>" + chosenEnemy.name).append("<h6>HP: " + chosenEnemy.hp).append("<h6>Attack: " + chosenEnemy.attack);


        if (chosenEnemy.hp <= 0) {
            console.log(chosenEnemy);
            $("#" + chosenEnemy.id + "Image").empty().append("<img src=" + chosenEnemy.defeatedImage + " >").attr("value", chosenEnemy.id);
            chosenEnemy.defeatedImage
            currentEnemy = false;
            wins++;
            console.log(wins);
            if (wins === 3) {
                alert("You Win!")
                victory();
                $("#fight").empty().append("<button>Try Again?").on("click", function () {
                    reset();
                })


            }
        }

        if (chosenChar.hp <= 0) {
            $("#" + chosenChar.id + "Image").empty().append("<img src=" + chosenChar.defeatedImage + " >").attr("value", chosenChar.id);
            alert("You Lost...")
            defeat = true;
            $("#fight").empty().append("<button>Try Again?").on("click", function () {
                reset();
            })


        }
    }

});




//     Victory music!

//         Battle Bahamut appears

// }