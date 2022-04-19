
var buttons = document.getElementsByTagName("button");
var displays = document.getElementsByTagName("th");

const keysAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "X", "+", "-", "=", ".", "Enter", "Escape", "Delete"];
var r = 0;
var d = 0;
var t = 0;
var s = "";
var countDigits = 0;
function addFunc(a, b) {
    return a + b;
}
function subtractFunc(a, b) {
    return a - b;
}
function multiplyFunc(a, b) {
    return a * b;
}
function divideFunc(a, b) {
    return a / b;
}
function clearFunc() {
    displays[1].innerText = 0;
}
function equalsFucnt(a, b) {
    return displays[1].innerText
}
function decimal() {
}
let a = '';
let at = '';
/*r= addFunc(r,8);
console.log(r);
r= addFunc(r,6);
console.log(r); */

/*r= subtractFunc(r,2);
console.log(r);
r= subtractFunc(r,8);
console.log(r);*/



for (let i = 0; i < 17; i++) {



    switch (buttons[i].innerHTML) { // button style
        case ".":
            buttons[i].style.backgroundColor = "#EAEBA7";
            buttons[i].style.fontWeight = 700;
            break;
        case "=":
            buttons[i].style.backgroundColor = "#4D8EC7";
            buttons[i].style.color = "#F5EFEF";
            buttons[i].style.fontWeight = 700;
            break;
        case "C":
            buttons[i].style.backgroundColor = "#EBA7A7";
            buttons[i].style.color = "#F5EFEF";
            buttons[i].style.fontWeight = 700;
            break;
        case "/":
        case "X":
        case "+":
            buttons[i].style.fontWeight = 700;
        case "-":
            buttons[i].style.fontWeight = 700;
            buttons[i].style.backgroundColor = "#97B3EB";
            break;
        default:
            buttons[i].style.backgroundColor = "lightgrey";
    } // end of button style code block

    buttons[i].addEventListener("click", function () {


        if (isNaN(parseFloat(buttons[i].innerHTML))) { // This is for symbols button code block
            if (buttons[i].innerText == ".") {
                if (displays[1].innerText.indexOf(".") == -1 && countDigits > 0) {

                    displays[1].innerText += buttons[i].innerText;
                } else {
                    if (countDigits == 0) {
                        displays[1].innerText = "0";
                        displays[1].innerText += buttons[i].innerText;
                    }
                }
                countDigits++;
            } else {


                switch (buttons[i].innerHTML) { //where the symbols will display
                    case "C":
                        clearFunc();
                        displays[0].innerHTML = buttons[i].innerHTML;
                        break;
                    case "+":
                        t += d;
                        s = "+";
                        displays[0].innerHTML += buttons[i].innerHTML;
                        break;
                    case "-":
                        t = d;
                        s = "-";
                        displays[0].innerHTML = buttons[i].innerHTML;
                        break;
                    case "X":
                        t = d;
                        s = "X";
                        displays[0].innerHTML = buttons[i].innerHTML;
                        break;
                    case "/":
                        t = d;
                        s = "/";
                        displays[0].innerHTML = buttons[i].innerHTML;
                        break;
                    case "=":
                        displays[1].innerHTML = r;
                        d = r;
                        s = "=";
                        break;
                    default:


                } // end of where the symbols will display
                countDigits = 0;
            }
        } else {
            if (countDigits == 0) {
                displays[1].innerText = buttons[i].innerText;
            }
            else {
                displays[1].innerText += buttons[i].innerText;

            }
            countDigits++;
            console.log(countDigits);



            d = parseFloat(displays[1].innerText);
            switch (s) { // symbols functions
                case "+":
                    r = addFunc(t, d);
                    break;
                case "-":
                    r = subtractFunc(t, d);
                    break;
                case "X":
                    r = multiplyFunc(t, d);
                    break;
                case "/":
                    r = divideFunc(t, d);
                    break;
                case "=":

                    break;
                case "C":
                    r = clearFunc();
                    break;
                default:
                    r = 0;

            } // symbols functions






        }
    } // This is for the symbols button code block

    )
}
document.addEventListener("keydown", function (event) {
    event.stopPropagation();
    event.preventDefault();

    if (keysAllowed.indexOf(event.key) > -1) {

        let validKey = "";

        for (let i = 0; i < buttons.length; i++) {
            if (event.key == buttons[i].innerText) {
                validKey = buttons[i].innerText;
                buttons[i].focus();
                break;
            }
            if (event.key == "X" && buttons[i].innerText == "X") {
                validKey = buttons[i].innerText;
                buttons[i].focus();
                break;
            }
            if ((event.key == "Escape" || event.key == "Delete") && buttons[i].innerText == "C") {
                validKey = buttons[i].innerText;
                buttons[i].focus();
                break;
            }
            if (event.key == "Enter" && buttons[i].innerText == "=") {
                validKey = buttons[i].innerText;
                buttons[i].focus();
                break;
            }

        }

    } else {
        document.getElementById("calculator-body").focus();
    }

})

document.addEventListener("keyup", function (event) {
    event.stopPropagation();
    event.preventDefault();

    if (keysAllowed.indexOf(event.key) > -1) {

        let validKey = "";

        for (let i = 0; i < buttons.length; i++) {
            if (event.key == buttons[i].innerText) {
                validKey = buttons[i].innerText;
                buttons[i].blur();
                break;
            }
            if ((event.key == "Escape" || event.key == "Delete") && buttons[i].innerText == "C") {
                validKey = buttons[i].innerText;
                buttons[i].blur();
                break;
            }
            if (event.key == "Enter" && buttons[i].innerText == "=") {
                validKey = buttons[i].innerText;
                buttons[i].blur();
                break;
            }

        }
        /*if (countDigits == 0) {
            displays[1].innerText = validKey;
        }
        else {
            displays[1].innerText += validKey;

        }*/


        if (isNaN(parseFloat(validKey))) {
            if (validKey == ".") {
                if (displays[1].innerText.indexOf(".") == -1 && countDigits > 0) {

                    displays[1].innerText += validKey;
                } else {
                    if (countDigits == 0) {
                        displays[1].innerText = "0";
                        displays[1].innerText += validKey;
                    }
                }
                countDigits++;
            } else {

                switch (validKey) {
                    case "C":
                        clearFunc();
                        displays[0].innerHTML = validKey;
                        break;
                    case "+":
                        t += d;
                        s = "+";
                        displays[0].innerHTML += validKey;
                        break;
                    case "-":
                        t = d;
                        s = "-";
                        displays[0].innerHTML = validKey;
                        break;
                    case "X":
                        t = d;
                        s = "X";
                        displays[0].innerHTML = validKey;
                        break;
                    case "/":
                        t = d;
                        s = "/";
                        displays[0].innerHTML = validKey;
                        break;
                    case "=":
                        displays[1].innerHTML = r;
                        d = r;
                        s = "=";
                        break;
                    default:


                }
                countDigits = 0;
            }
        } else {
            if (countDigits == 0) {
                displays[1].innerText = validKey;
            }
            else {
                displays[1].innerText += validKey;

            }
            countDigits++;



            d = parseFloat(displays[1].innerText);
            switch (s) {
                case "+":
                    r = addFunc(t, d);
                    break;
                case "-":
                    r = subtractFunc(t, d);
                    break;
                case "X":
                    r = multiplyFunc(t, d);
                    break;
                case "/":
                    r = divideFunc(t, d);
                    break;
                case "=":
                    displays[1].innerHTML = r;
                    d = r;
                    s = "=";
                    break;
                case "C":
                    r = clearFunc();
                    break;
                default:
                    r = 0;

            }






        }
    } else {
        document.getElementById("calculator-body").blur();
    }

})
