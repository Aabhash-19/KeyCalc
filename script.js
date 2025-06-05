let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// --- Button Click Logic ---
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// --- Keyboard Input Logic ---
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (key.toLowerCase() === 'c') {
        handleInput('AC');
    } else if (/[\d+\-*/.]/.test(key)) {
        handleInput(key);
    }
});

// --- Shared Logic Function ---
function handleInput(char) {
    if (char === "=") {
        try {
            string = eval(string);
        } catch {
            string = "Error";
        }
        input.value = string;
    } else if (char === "AC") {
        string = "";
        input.value = string;
    } else if (char === "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += char;
        input.value = string;
    }
}
