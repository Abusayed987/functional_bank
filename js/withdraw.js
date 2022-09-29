/*
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newInputWithdrawFieldValue = getInputFieldByValue('withdraw_field');

    const withdraElementValue = getTextElementbyId('withdraw_total');

    const withdrawTotalValue = newInputWithdrawFieldValue + withdraElementValue;

    setValueById('withdraw_total', withdrawTotalValue)


    const previousBlance = getTextElementbyId('blance_total')
    const newTotalBlance = previousBlance - newInputWithdrawFieldValue;
    setValueById('blance_total', newTotalBlance )
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawValue = getInputValueById('withdraw_field');
    const widthdrawElement = getElementValueById('withdraw_total') ;
    const CurrentTotalWithdrawValue = widthdrawElement + newWithdrawValue ;
    setElementById('withdraw_total',CurrentTotalWithdrawValue);

    const previousTextElement =  getElementValueById('blance_total');
    const newTotalBlance = previousTextElement - newWithdrawValue ;
    setElementById('blance_total', newTotalBlance);
})
 */
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newInputWithdrawValue = getInputValueById('withdraw_field');
    const previousTextElement = getTextElementById('withdraw_total');
     
    const WithdrawTotalValue = newInputWithdrawValue + previousTextElement;
    setElementById('withdraw_total', WithdrawTotalValue);

    const previousBlance = getTextElementById('blance_total');
    const currentTotalBlance = previousBlance -  newInputWithdrawValue  ;
    setElementById('blance_total', currentTotalBlance)
})