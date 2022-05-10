let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let split = document.getElementById('split');
let tipFive = document.querySelector('#tip-five');
let tipTen = document.querySelector('#tip-ten');
let tipFifteen = document.querySelector('#tip-fifteen');
let tipTwentyFive = document.querySelector('#tip-twenty-five');
let tipFifty = document.querySelector('#tip-fifty');
let custom = document.querySelector('#custom');
let total = document.querySelector('#total');
let tipBtns = document.querySelectorAll('.tip-btn');
let splitContainer = document.getElementById('split-container');
let billContainer = document.getElementById('bill-container');
let errorMessage = document.getElementById('error-message');
function tips() {
    tipBtns.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            let preTip = parseInt(bill.value);
            let tipSum = preTip * btn.value;
            let newTotal = tipSum + preTip;
            let splitTotal = newTotal / split.value;
            let formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            });
            //Tip Total
            if (isNaN(splitTotal)) tip.innerHTML = '$0.00';
            else tip.innerHTML = formatter.format(tipSum);
            //Split total
            if (isNaN(preTip)) total.innerHTML = '$0.00';
            else total.innerHTML = formatter.format(splitTotal);
            //Split Error Handling
            if (split.value <= 0) {
                splitContainer.style.border = '2px red solid';
                total.innerHTML = '$0.00';
                errorMessage.style.display = "block";
            } else {
                splitContainer.style.border = '2px transparent solid';
                errorMessage.style.display = "none";
            }
        });
    });
}
tips();
custom.addEventListener('change', ()=>{
    let preTip = parseInt(bill.value);
    let tipSum = preTip * parseInt(custom.value) * 0.01;
    let newTotal = tipSum + preTip;
    let splitTotal = newTotal / split.value;
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    if (isNaN(preTip)) total.innerHTML = '$0.00';
    else total.innerHTML = formatter.format(splitTotal);
    if (isNaN(splitTotal)) tip.innerHTML = '$0.00';
    else tip.innerHTML = formatter.format(tipSum);
});
//Reset Page
let resetForm = document.querySelector('form');
let resetTotal = document.querySelector('#total');
let resetTip = document.querySelector('#tip');
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=>{
    resetForm.reset();
    resetTip.innerHTML = '$0.00';
    resetTotal.innerHTML = '$0.00';
});

//# sourceMappingURL=index.c36f364e.js.map
