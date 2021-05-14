var score = 0;
var plateJust = 0;
var plateAlign = 0;
var cupJust = 0;
var cupAlign = 0;

function clearInformation() {
    document.getElementById("inputJustify").value = "";
    document.getElementById("inputAlign").value = "";
    console.log("Cleared");
}

function getScore() {
    var cup = document.querySelector(".gameCanvas");
    if (plateJust == cupJust && plateAlign == cupAlign) {
        score += 1
        console.log(score)
        randomize();
        clearInformation();
        cup.classList.remove('justify-flex-start');
        cup.classList.remove('justify-flex-end');
        cup.classList.remove('justify-flex-center');
        cup.classList.remove('align-flex-start');
        cup.classList.remove('align-flex-end');
        cup.classList.remove('align-flex-center');
        if (score == 1) {
            alert("Good! You know have " + score + " point.")
        } else {
            alert("Good! You know have " + score + " points.")
        }
    } else {
        alert("Game Over! Try Again.")
        score = 0;
    }
}
function randomize() {
    var plate = document.querySelector(".plate-location");
    var justify = Math.floor(Math.random() * (4 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
    var align = Math.floor(Math.random() * (4 - 1) + 1);


    if (justify == "1") {
        plate.classList.remove('justify-flex-end');
        plate.classList.remove('justify-flex-center')
        plate.classList.add('justify-flex-start');
        plateJust = 1;

    } else if (justify == "2") {
        plate.classList.remove('justify-flex-start');
        plate.classList.remove('justify-flex-center')
        plate.classList.add('justify-flex-end');
        plateJust = 2;

    } else if (justify == "3") {
        plate.classList.remove('justify-flex-start');
        plate.classList.remove('justify-flex-end')
        plate.classList.add('justify-flex-center');  
        plateJust = 3;
    } else {
        plate.classList.remove('justify-flex-start');
        plate.classList.remove('justify-flex-end')
        plate.classList.remove('justify-flex-center');
        console.log("false")
    }

    if (align == "1") {
        plate.classList.remove('align-flex-end');
        plate.classList.remove('align-flex-center');
        plate.classList.add('align-flex-start');
        plateAlign = 1;

    } else if (align == "2") {
        plate.classList.remove('align-flex-start');
        plate.classList.remove('align-flex-center');
        plate.classList.add('align-flex-end');
        plateAlign = 2;

    } else if (align == "3") {
        plate.classList.remove('align-flex-start');
        plate.classList.remove('align-flex-end');   
        plate.classList.add('align-flex-center');
        plateAlign = 3;

    } else {
        plate.classList.remove('align-flex-start');
        plate.classList.remove('align-flex-end')
        plate.classList.remove('align-flex-center');
        console.log("false")
    }

    if (justify == "1" && align == "1") {
        randomize()
    }

    console.log(plateAlign, plateJust)
}

function refresh() {
    var inputJustify = document.getElementById("inputJustify").value;
    var inputAlign = document.getElementById("inputAlign").value;
    var cup = document.querySelector(".gameCanvas");

    if (inputJustify == "justify-content: flex-start;") {
        cup.classList.remove('justify-flex-end');
        cup.classList.remove('justify-flex-center')
        cup.classList.add('justify-flex-start');
        console.log("true-start");
        cupJust = 1;

    } else if (inputJustify == "justify-content: flex-end;") {
        cup.classList.remove('justify-flex-start');
        cup.classList.remove('justify-flex-center');
        cup.classList.add('justify-flex-end');
        console.log("true-end");
        cupJust = 2;

    } else if (inputJustify == "justify-content: center;") {
        cup.classList.remove('justify-flex-start');
        cup.classList.remove('justify-flex-end');
        cup.classList.add('justify-flex-center');
        console.log("true-center");
        cupJust = 3;

    } else {
        cup.classList.remove('justify-flex-start');
        cup.classList.remove('justify-flex-end');
        cup.classList.remove('justify-flex-center');
        console.log("false");
    }

    if (inputAlign == "align-items: flex-start;") {
        cup.classList.remove('align-flex-end');
        cup.classList.remove('align-flex-center');
        cup.classList.add('align-flex-start');
        console.log("true-start")
        cupAlign = 1;

    } else if (inputAlign == "align-items: flex-end;") {
        cup.classList.remove('align-flex-start');
        cup.classList.remove('align-flex-center');
        cup.classList.add('align-flex-end');
        console.log("true-end");
        cupAlign = 2;

    } else if (inputAlign == "align-items: center;") {
        cup.classList.remove('align-flex-start');
        cup.classList.remove('align-flex-end');
        cup.classList.add('align-flex-center');
        console.log("true-center");
        cupAlign = 3;

    } else {
        cup.classList.remove('align-flex-start');
        cup.classList.remove('align-flex-end');
        cup.classList.remove('align-flex-center');
    }
}
