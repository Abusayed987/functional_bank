document.getElementById('btn-deposit').addEventListener('click',function(){
    const newInputDepositValue = getInputFieldByValue('deposit_field');

    const previousTextElement = getTextElementbyId('deposit_total');
    const newTotalDepositAmmount=previousTextElement  + newInputDepositValue ;

    setValueById('deposit_total', newTotalDepositAmmount );
    
    const previousBlance = getTextElementbyId('blance_total')
    const newTotalBlance = previousBlance + newInputDepositValue;

    setValueById('blance_total', newTotalBlance)
})