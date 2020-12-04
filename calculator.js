var calc = "";

function showNumber(evt) {
    var r = document.getElementById("result")
    var e = evt.currentTarget;
    if (r.innerHTML == "0" || calc == "") {
        r.innerHTML = e.innerHTML;
    }
    else {
        r.innerHTML += e.innerHTML;
    }
    calc += evt.currentTarget.innerHTML;
}

function addMark(evt) {
    var mark = evt.currentTarget.innerHTML;
//    console.log(mark)
    if (mark == "×") {
        calc += "*";
    }
    else if (mark == "÷") {
        calc += "/";
    }
    else if (mark == "−") {
        calc += "-";
    }
    else if (mark == "+") {
        calc += "+";
    }
    else if (mark == ".") {
        calc += ".";
    }
    document.getElementById("result").innerHTML += evt.currentTarget.innerHTML;
    
}

function showResult() {
//    console.log(calc)
    document.getElementById("result").innerHTML = eval(calc);
    calc = ""
}