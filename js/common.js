function getInputValueById(id) {
    const inputFieldElement = document.getElementById(id);
    const inputFieldString = inputFieldElement.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    return inputFieldNumber;
}

function setTextValue(id, value) {
    const textField = document.getElementById(id);
    textField.innerText = value;
}