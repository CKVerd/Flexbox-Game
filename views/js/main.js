function randomize() {
    var plate = document.querySelector(".plate-location");
    var justify = Math.floor(Math.random() * (4 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
    var align = Math.floor(Math.random() * (4 - 1) + 1);
    
    if (justify == "1") {
        plate.classList.remove('justify-flex-end');
        plate.classList.remove('justify-flex-center')
        plate.classList.add('justify-flex-start');

    } else if (justify == "2") {
        plate.classList.remove('justify-flex-start');
        plate.classList.remove('justify-flex-center')
        plate.classList.add('justify-flex-end');

    } else if (justify == "3") {
        plate.classList.remove('justify-flex-start');
        plate.classList.remove('justify-flex-end')
        plate.classList.add('justify-flex-center');  
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
        console.log("true-start")

    } else if (align == "2") {
        plate.classList.remove('align-flex-start');
        plate.classList.remove('align-flex-center');
        plate.classList.add('align-flex-end');
        console.log("true-end")

    } else if (align == "3") {
        plate.classList.remove('align-flex-start');
        plate.classList.remove('align-flex-end');
        plate.classList.add('align-flex-center');
        console.log("true-center")

    } else {
        plate.classList.remove('align-flex-start');
        plate.classList.remove('align-flex-end')
        plate.classList.remove('align-flex-center');
        console.log("false")
    }

    if (justify == "1" && align == "1") {
        randomize()
    }
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

    } else if (inputJustify == "justify-content: flex-end;") {
        cup.classList.remove('justify-flex-start');
        cup.classList.remove('justify-flex-center');
        cup.classList.add('justify-flex-end');
        console.log("true-end");

    } else if (inputJustify == "justify-content: center;") {
        cup.classList.remove('justify-flex-start');
        cup.classList.remove('justify-flex-end');
        cup.classList.add('justify-flex-center');
        console.log("true-center");

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

    } else if (inputAlign == "align-items: flex-end;") {
        cup.classList.remove('align-flex-start');
        cup.classList.remove('align-flex-center');
        cup.classList.add('align-flex-end');
        console.log("true-end")

    } else if (inputAlign == "align-items: center;") {
        cup.classList.remove('align-flex-start');
        cup.classList.remove('align-flex-end');
        cup.classList.add('align-flex-center');
        console.log("true-center")

    } else {
        cup.classList.remove('align-flex-start');
        cup.classList.remove('align-flex-end');
        cup.classList.remove('align-flex-center');
    }

}