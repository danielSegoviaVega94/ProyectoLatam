let historyList = [];

function isValidText(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

function updateHistory(action, input, output) {
    historyList.push({ action, input, output });
    const historyListElement = document.getElementById('historyList');
    const newItem = document.createElement('li');
    newItem.textContent = `${action}: ${input} -> ${output}`;
    historyListElement.appendChild(newItem);
}

function caesarCipher(str, shift) {
    return str.replace(/[a-z]/g, function(char) {
        return String.fromCharCode((char.charCodeAt(0) - 97 + shift + 26) % 26 + 97);
    });
}

function base64Encode(str) {
    return btoa(str);
}

function base64Decode(str) {
    return atob(str);
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    if (!isValidText(inputText)) {
        alert('El texto ingresado contiene caracteres inválidos. Solo se permiten letras minúsculas y espacios.');
        return;
    }
    const method = document.getElementById('method').value;
    let outputText = '';
    switch (method) {
        case 'reverse':
            outputText = inputText.split('').reverse().join('');
            break;
        case 'caesar':
            outputText = caesarCipher(inputText, 3);
            break;
        case 'base64':
            outputText = base64Encode(inputText);
            break;
    }
    document.getElementById('outputText').value = outputText;
    updateHistory('Encriptar', inputText, outputText);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    if (!isValidText(inputText)) {
        alert('El texto ingresado contiene caracteres inválidos. Solo se permiten letras minúsculas y espacios.');
        return;
    }
    const method = document.getElementById('method').value;
    let outputText = '';
    switch (method) {
        case 'reverse':
            outputText = inputText.split('').reverse().join('');
            break;
        case 'caesar':
            outputText = caesarCipher(inputText, -3);
            break;
        case 'base64':
            outputText = base64Decode(inputText);
            break;
    }
    document.getElementById('outputText').value = outputText;
    updateHistory('Desencriptar', inputText, outputText);
}

function swapText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText').value;
    document.getElementById('inputText').value = outputText;
    document.getElementById('outputText').value = inputText;
}
