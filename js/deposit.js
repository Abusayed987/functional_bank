/*
document.getElementById('btn-deposit').addEventListener('click',function(){
    const newInputDepositValue = getInputFieldByValue('deposit_field');

    const previousTextElement = getTextElementbyId('deposit_total');
    const newTotalDepositAmmount=previousTextElement  + newInputDepositValue ;

    setValueById('deposit_total', newTotalDepositAmmount );
    
    const previousBlance = getTextElementbyId('blance_total')
    const newTotalBlance = previousBlance + newInputDepositValue;

    setValueById('blance_total', newTotalBlance)
})

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newInputDepositValue = getInputValueById('deposit_field');

    const previousTextElement = getElementValueById('deposit_total');

    const totalDepositElement = previousTextElement + newInputDepositValue ;

    setElementById('deposit_total', totalDepositElement);

    const previousBlance = getElementValueById('blance_total');

    const newTotalBlance = previousBlance + newInputDepositValue;
    setElementById('blance_total',newTotalBlance );
})
 */

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newInputDepositValue = getInputValueById('deposit_field');
    const previousTextElement = getTextElementById('deposit_total');
     
    const DepositTotalValue = newInputDepositValue + previousTextElement;
    setElementById('deposit_total', DepositTotalValue);

    const previousBlance = getTextElementById('blance_total');
    const currentTotalBlance = previousBlance + newInputDepositValue;
    setElementById('blance_total', currentTotalBlance)
})
