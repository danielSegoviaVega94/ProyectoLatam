let historyList = [];

// Validar que el texto solo contiene letras minúsculas y espacios, excepto para Base64
function isValidText(text, method) {
    if (method === 'base64') {
        return true;
    }
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

// Cargar el historial desde localStorage al iniciar la página
function loadHistory() {
    const savedHistory = localStorage.getItem('historyList');
    if (savedHistory) {
        historyList = JSON.parse(savedHistory);
        const historyListElement = document.getElementById('historyList');
        historyListElement.innerHTML = '';
        historyList.forEach(item => {
            const newItem = document.createElement('li');
            newItem.textContent = `${item.action}: ${item.input} -> ${item.output}`;
            historyListElement.appendChild(newItem);
        });
    }
}

// Actualizar el historial y guardarlo en localStorage
function updateHistory(action, input, output) {
    historyList.push({ action, input, output });
    localStorage.setItem('historyList', JSON.stringify(historyList));
    const historyListElement = document.getElementById('historyList');
    const newItem = document.createElement('li');
    newItem.textContent = `${action}: ${input} -> ${output}`;
    historyListElement.appendChild(newItem);
}

// Actualizar el placeholder del área de entrada y el mensaje de validación
function updatePlaceholder() {
    const method = document.getElementById('method').value;
    const inputText = document.getElementById('inputText');
    const validationInfo = document.getElementById('validationInfo');
    if (method === 'base64') {
        inputText.placeholder = "Ingrese el texto aquí (no hay restricciones para Base64)";
        validationInfo.textContent = "No hay restricciones de validación para Base64.";
        validationInfo.classList.add('warning');
    } else {
        inputText.placeholder = "Ingrese el texto aquí";
        validationInfo.textContent = "Solo letras minúsculas y sin acentos.";
        validationInfo.classList.remove('warning');
    }
}

// Cifrado César
function caesarCipher(str, shift) {
    return str.replace(/[a-z]/g, function(char) {
        return String.fromCharCode((char.charCodeAt(0) - 97 + shift + 26) % 26 + 97);
    });
}

// Codificación Base64
function base64Encode(str) {
    return btoa(str);
}

// Decodificación Base64
function base64Decode(str) {
    return atob(str);
}

// Encriptación One
function customEncode(str) {
    const map = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return str.replace(/[eioua]/g, match => map[match]);
}

// Desencriptación One
function customDecode(str) {
    const map = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return str.replace(/enter|imes|ai|ober|ufat/g, match => map[match]);
}

// Encriptar texto
function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const method = document.getElementById('method').value;
    if (!isValidText(inputText, method)) {
        alert('El texto ingresado contiene caracteres inválidos. Solo se permiten letras minúsculas y espacios.');
        return;
    }
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
        case 'custom':
            outputText = customEncode(inputText);
            break;
    }
    document.getElementById('outputText').value = outputText;
    updateHistory('Encriptar', inputText, outputText);
}

// Desencriptar texto
function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const method = document.getElementById('method').value;
    if (!isValidText(inputText, method)) {
        alert('El texto ingresado contiene caracteres inválidos. Solo se permiten letras minúsculas y espacios.');
        return;
    }
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
        case 'custom':
            outputText = customDecode(inputText);
            break;
    }
    document.getElementById('outputText').value = outputText;
    updateHistory('Desencriptar', inputText, outputText);
}

// Intercambiar texto
function swapText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText').value;
    document.getElementById('inputText').value = outputText;
    document.getElementById('outputText').value = inputText;
}

// Cargar archivo de texto
function loadFile(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            document.getElementById('inputText').value = text;
        };
        reader.readAsText(file);
    }
}

// Descargar resultado en un archivo de texto
function downloadResult() {
    const text = document.getElementById('outputText').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'resultado.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = '_blank';
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

// Cargar el historial cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadHistory);
