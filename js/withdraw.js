document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newInputWithdrawFieldValue = getInputFieldByValue('withdraw_field');

    const withdraElementValue = getTextElementbyId('withdraw_total');

    const withdrawTotalValue = newInputWithdrawFieldValue + withdraElementValue;

    setValueById('withdraw_total', withdrawTotalValue)


    const previousBlance = getTextElementbyId('blance_total')
    const newTotalBlance = previousBlance - newInputWithdrawFieldValue;
    setValueById('blance_total', newTotalBlance )
})