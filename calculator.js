var calc = "";

function showNumber(evt) {
    calc += evt.currentTarget.innerHTML;
    document.getElementById("result").innerHTML = calc;
}

function addMark(evt) {
    var mark = evt.currentTarget.innerHTML;
//    console.log(mark)
    if (mark == "×") {
        calc += " *";
    }
    else if (mark == "÷") {
        calc += " /";
    }
    else if (mark == "−") {
        calc += " -";
    }
    else if (mark == "+") {
        calc += " +";
    }
    else if (mark == " . ") {
        calc += ".";
    }
    document.getElementById("result").innerHTML = calc;
    
}

function showResult() {
//    console.log(calc)
    document.getElementById("result").innerHTML = eval(calc);
    calc = ""
}