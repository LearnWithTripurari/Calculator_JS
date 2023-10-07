let display = "";

const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
    button.addEventListener("click", buttonHandler)
}


function buttonHandler(event) {
    const text = event.target.innerText;

    if (validateExpression(text) === 0) {
        return;
    }

    if (text === '=') {
        calculate();
    } else if (text === 'c') {
        display = "";
    } else if (text === '.') {
        display += text;
    } else if (text === '←') {
        display = display.substring(0, display.length - 1)
    } else {
        display += text;
    }

    displayHandler();
}

function displayHandler() {
    document.querySelector("#display").innerText = display
}

function calculate() {
    display = eval(display).toString() || ""
    displayHandler()
}

function validateExpression(text) {

    let lastChar = display.charAt(display.length - 1)

    if ((text === '.' && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) || (lastChar === '.' && (text === '+' || text === '-' || text === '*' || text === '/'))) {
        display = display.substring(0, display.length - 1);
    } else if ((text === '+' || text === '-' || text === '*' || text === '/') && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
        return 0;
    } else if (text === '.' && lastChar === '.') {
        return 0;
    }

    return 1;

}

