// Get a input value in this function 
function getInputFieldByValue(inputValueId) {
    const inputfield = document.getElementById(inputValueId);
    const inputfieldString = inputfield.value ;
    const inputfieldNumber = parseFloat(inputfieldString);
    inputfield.value = '';
    return inputfieldNumber;
}

// Get a text Element Value in this functin
function getTextElementbyId(textElementId) {
    const textElementField = document.getElementById(textElementId);
    const textElementValueString = textElementField.innerText;
    const textElementValueNumber = parseFloat(textElementValueString);
    return textElementValueNumber;
}

// set a new value in this function 
function setValueById(setElementId, newValue ) {
    const textElement = document.getElementById(setElementId);
    textElement.innerText = newValue; 
}

