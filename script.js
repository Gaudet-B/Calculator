console.log("script connected");

var counter = 0;
var num = 0;
var string = "";
var operation = ""; 

function mouseDown(element) {
    element.style.backgroundColor = "#efefef";
}

function mouseUp(element) {
    element.style.backgroundColor = "#393c3f";
}

function operatorUp(element) {
    element.style.backgroundColor = "#ff9844";
}

function compUp(element) {
    element.style.backgroundColor = "#c2c2c2";
}

function press(element) {
    let number = element.innerText;
    if (counter == 0) {
        document.getElementById("display").innerText = "";
        counter++;
    }
    if (string.length > 10) {
        return alert("That's too many numbers!");
    }
    else {
        if (counter != 0) {
            let display = document.getElementById("display");
            display.innerText += number;
            string += number;
        }
        counter++;
    }
}

function setOP(operator) {
    if (num == 0) {
        let tempNum = Number(string);
        counter = 0;
        operation = tempNum + operator;
        document.getElementById("display").innerText = "";
        string = "";
        tempNum = 0;   
    }
    else if (num != 0) {
        let tempNum = Number(num);
        counter = 0;
        operation = tempNum + operator;
        console.log(operation);
        document.getElementById("display").innerText = "";
        string = "";
        tempNum = 0;
    }
}

function calculate() {
    let tempNum = Number(string);
    operation += tempNum;
    let result = String(eval(operation));
    if (result.length > 10) {
        return alert("That's too much math for a little calculator like me!");
    }
    else {
        document.getElementById("display").innerText = result;
    }
    counter = 0;
    string = "";
    operation = "";
    num = result;
}

function clr() {
    num = 0;
    counter = 0;
    string = "";
    operation = "";
    document.getElementById("display").innerText = "0";
}
