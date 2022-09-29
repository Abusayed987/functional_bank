/*
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


// Function for input value
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const newInputFieldString = inputField.value ;
    const newInputFieldNumber = parseFloat(newInputFieldString);
    inputField.value = '';
    return newInputFieldNumber;
}
//function for text Element 
function getElementValueById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    const  textElementValueNumber = parseFloat(textElementValueString);
    return textElementValueNumber;
}
// function for set element
function setElementById(setElementId, newValue) {
    const setElementValue = document.getElementById(setElementId);
    setElementValue.innerText = newValue;
}
*/

// function for get input value
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value ;
    const inputfieldNumber = parseFloat(inputFieldString) ;
    inputField.value = '';
    return inputfieldNumber;
}
// function for get text Element 
function getTextElementById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const previousTextElementString = textElement.innerText;
    const previousTextElementNumber  =  parseFloat(previousTextElementString);
    return previousTextElementNumber;
}
// function for set Element

function setElementById(setElementId, newValue) {
    const setElement = document.getElementById(setElementId)  ;
    setElement.innerText = newValue ;
}
