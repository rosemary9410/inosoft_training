let displayValue = "";

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
    document.getElementById("display").focus();
}

function handleKeyPress(event) {
    if (/^[0-9/*\-+%.]$/.test(event.key)) {
        appendToDisplay(event.key);
        event.preventDefault();
        document.getElementById("display").focus();
    } else if (event.key === "Enter") {
        calculate();
    }
}

document.addEventListener("keydown", handleKeyPress);

function toggleSign() {
    if (displayValue.startsWith("-")) {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = "-" + displayValue;
    }
    updateDisplay();
    document.getElementById("display").focus();
}

// Membuat tampilan jadi fokus, ga ilang2an
function handleClick(value) {
    if (value === "=") {
        calculate();
    } else if (value === "+/-") {
        toggleSign();
    } else if (value === "%") {
        displayValue = (parseFloat(displayValue) / 100).toString();
        updateDisplay();
        document.getElementById("display").focus();
    } else {
        appendToDisplay(value);
        document.getElementById("display").focus();
    }
}
