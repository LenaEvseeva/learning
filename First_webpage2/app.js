
function addSidebar() {
	this.classList.add("hidden");
	this.nextElementSibling.classList.remove("hidden");
	document.querySelector('.sidebar').classList.remove("hidden");
}

function removeSidebar() {
	this.classList.add("hidden");
	this.previousElementSibling.classList.remove("hidden");
	document.querySelector('.sidebar').classList.add("hidden");
}

function checkboxOff() {
	this.classList.add("hidden");
	this.nextElementSibling.classList.remove("hidden");
	document.querySelector('.sidebar__menu2').style.color = "#b6aadc";
}

function checkboxOn() {
	this.classList.add("hidden");
	this.previousElementSibling.classList.remove("hidden");
	document.querySelector('.sidebar__menu2').style.color = "#ffec00";
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function minusone() {
	var amount = document.getElementsByName('amount-name')[0].value;
	if(isNumeric(amount)) {
		amount = Number(amount);
		amount--;
		document.getElementById('amount').value = amount;
	}
}

function plusone() {
	var amount = document.getElementsByName('amount-name')[0].value;
	if(isNumeric(amount)) {
		amount = Number(amount);
		amount++;
		document.getElementById('amount').value = amount;
	}
}

document.querySelector('.img1').addEventListener('click', addSidebar);
document.querySelector('.img2').addEventListener('click', removeSidebar);
document.querySelector('.img3').addEventListener('click', checkboxOff);
document.querySelector('.img4').addEventListener('click', checkboxOn);
document.querySelector('.img4').addEventListener('click', checkboxOn);
document.getElementById('minus').addEventListener('click', minusone);
document.getElementById('plus').addEventListener('click', plusone);
