
function buttonSelected(element){
    const playerId = element.parentNode.children[0].innerText;
    const playerSelected = document.getElementById('select-list');
    const list = document.createElement('li');


    const playerSelecteded = document.querySelectorAll('#select-list li')
    const playersLength = playerSelecteded.length;


    if(playersLength < 5){
        list.innerText = playerId;
        playerSelected.appendChild(list);

        element.setAttribute('disabled', true)
    }
    else{
        alert('Please selected best Five')
    }

    
}


document.getElementById('first-calculate').addEventListener('click', function(){
    const playerInputField = document.getElementById('player-field');
    const playerInputFieldString = playerInputField.value ;
    const totalPlayerValue = parseFloat(playerInputFieldString);

    if(totalPlayerValue > 0){
        const playerSelecteded = document.querySelectorAll('#select-list li')
        const playersLength = playerSelecteded.length;

        const perTotalValue = playersLength * totalPlayerValue;

        const playerExpensesValue = document.getElementById('player-cost');
        playerExpensesValue.innerText = perTotalValue;
    }
    else{
        alert('can not use the minus number only positive number for money')
        playerInputField.value='';
    }
})

document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerExpensesValue = document.getElementById('player-cost');
    const playerExpensesValueString = playerExpensesValue.innerText;
    const playerExpensesTotal = parseFloat(playerExpensesValueString);
    
    
    const managerFieldValue = document.getElementById('manager-field');
    const managerFieldValueString = managerFieldValue.value ;
    const managerCost = parseFloat(managerFieldValueString);


    const coachFieldValue = document.getElementById('coach-field');
    const coachFieldValueString = coachFieldValue.value ;
    const coachCost = parseFloat(coachFieldValueString);


    if(playerExpensesTotal > 0 && managerCost > 0 && coachCost > 0){
        const totalAmountValue = playerExpensesTotal + managerCost + coachCost;
        const expensesTotalValue = document.getElementById('total-result');
        expensesTotalValue.innerText = totalAmountValue;

    }
    else{
        alert('you must be paid manager and coach money you can not negative number ');
        managerFieldValue.value = '';
        coachFieldValue.value = '';
    }

})