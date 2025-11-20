// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');


buttons.forEach(button => {
button.addEventListener('click', () => {
const value = button.textContent;


if (value === '=') {
try {
display.value = eval(display.value);
} catch {
display.value = 'Error';
}
return;
}


if (value === '%') {
try {
display.value = parseFloat(display.value)/100;
} catch {
display.value = 'Error';
}
return;
}


if (value === '√') {
try {
display.value = Math.sqrt(parseFloat(display.value));
} catch {
display.value = 'Error';
}
return;
}


if (value !== 'C' && value !== 'DEL') {
display.value += value;
}
});
});


// Clear display
clearBtn.addEventListener('click', () => {
display.value = '';
});


// Delete last character
deleteBtn.addEventListener('click', () => {
display.value = display.value.slice(0, -1);
});