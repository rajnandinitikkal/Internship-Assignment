function handleClick(val) {
    const inputBox = document.getElementById("txt");
    inputBox.value = (inputBox.value + val);
}

function clearScreen(val) {
    const inputBox = document.getElementById("txt");
    inputBox.value = "";
}

function calculate(val) {
    const inputBox = document.getElementById("txt");
    const ans = eval(inputBox.value);
    inputBox.value = ans;
}
