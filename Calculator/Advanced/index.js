const display = document.getElementById("display");
const history = document.getElementById("history");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    history.textContent = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
        let result = eval(expression);
        if (result === Infinity || isNaN(result)) {
            throw new Error("Invalid");
        }
        history.textContent = display.value + " =";
        display.value = result;
    } catch {
        display.value = "ERROR";
    }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
    if ((/[0-9+\-*/.%]/).test(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key.toLowerCase() === "c") {
        clearDisplay();
    }
});
