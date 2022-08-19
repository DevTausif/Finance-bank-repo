document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withDrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withDrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);

    withDrawField.value = '';

    const previousWithDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithDrawTotalString = previousWithDrawTotalElement.innerText;
    const previousWithDrawTotal = parseFloat(previousWithDrawTotalString);

    const withdrawTotal = previousWithDrawTotal + newWithdrawAmount;
    previousWithDrawTotalElement.innerText = withdrawTotal;

    // get previous balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate new balance

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText= newBalanceTotal;


})