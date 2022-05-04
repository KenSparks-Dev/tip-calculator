let bill = document.getElementById('price');
let tip = document.getElementById('tip');
let split = document.getElementById('split');
let tipFive = document.querySelector('#tip-five');
let tipTen = document.querySelector('#tip-ten');
let tipFifteen = document.querySelector('#tip-fifteen');
let tipTwentyFive = document.querySelector('#tip-twenty-five');
let tipFifty = document.querySelector('#tip-fifty');
let custom = document.querySelector('#custom');
let total = document.querySelector('#total');
let tipValues = [ tipFive, tipTen, tipFifteen, tipTwentyFive, tipFifty ];
console.log(tipValues);
//Tip Functions
function tips() {
	let preTip = parseInt(bill.value);
	let values = tipValues.map((item) => parseInt(item.value));
	console.log(values);
}
tips();
tipFive.addEventListener('click', () => {
	let preTip = parseInt(bill.value);
	let tipSum = preTip * 0.05;
	let newTotal = tipSum + preTip;
	let splitTotal = newTotal / split.value;
	let formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	if (isNaN(splitTotal)) {
		tip.innerHTML = '$0.00';
	} else {
		tip.innerHTML = formatter.format(tipSum);
	}

	if (isNaN(preTip)) {
		total.innerHTML = '$0.00';
	} else {
		total.innerHTML = formatter.format(splitTotal);
	}
});

custom.addEventListener('change', () => {
	let preTip = parseInt(bill.value);
	let tipSum = preTip * parseInt(custom.value) * 0.01;
	let newTotal = tipSum + preTip;
	let splitTotal = newTotal / split.value;
	let formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
	if (isNaN(preTip)) {
		total.innerHTML = '$0.00';
	} else {
		total.innerHTML = formatter.format(splitTotal);
	}

	if (isNaN(splitTotal)) {
		tip.innerHTML = '$0.00';
	} else {
		tip.innerHTML = formatter.format(tipSum);
	}
});

//Reset Page
let resetForm = document.querySelector('form');
let resetTotal = document.querySelector('#total')
let resetTip = document.querySelector('#tip')
console.log(resetTotal)
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
	resetForm.reset()
	resetTip.innerHTML = '$0.00'
	resetTotal.innerHTML = '$0.00'
});
