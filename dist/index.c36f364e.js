let bill = document.getElementById('price');
let tip = document.getElementById('tip');
let split = document.getElementById('split');
let tipFive = document.querySelector('#five');
let tipTen = document.querySelector('#ten');
let tipFifteen = document.querySelector('#fifteen');
let tipTwentyFive = document.querySelector('#twenty-five');
let tipFifty = document.querySelector('#fifty');
let custom = document.querySelector('#custom');
let total = document.querySelector('#total');
//Tip Functions
tipFive.addEventListener('click', ()=>{
    let preTip = parseInt(bill.value);
    let tipSum = preTip * 0.05;
    let newTotal = tipSum + preTip;
    let splitTotal = newTotal / split.value;
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    if (isNaN(splitTotal)) tip.innerHTML = '$0.00';
    else tip.innerHTML = formatter.format(tipSum);
    if (isNaN(preTip)) total.innerHTML = '$0.00';
    else total.innerHTML = formatter.format(splitTotal);
});
tipTen.addEventListener('click', ()=>{
    let preTip = parseInt(bill.value);
    let tipSum = preTip * 0.1;
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
tipFifteen.addEventListener('click', ()=>{
    let preTip = parseInt(bill.value);
    let tipSum = preTip * 0.15;
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
tipTwentyFive.addEventListener('click', ()=>{
    let preTip = parseInt(bill.value);
    let tipSum = preTip * 0.25;
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
tipFifty.addEventListener('click', ()=>{
    let preTip = parseInt(bill.value);
    let tipSum = preTip * 0.5;
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
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=>{
    resetForm.reset();
});

//# sourceMappingURL=index.c36f364e.js.map
