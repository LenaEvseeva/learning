
function addSidebar() {
	document.querySelector('.img2').style.display = "block";
	document.querySelector('.img1').style.display = "none";
	document.querySelector('.page-sidebar').style.display = "block";
}

function removeSidebar() {
	document.querySelector('.img2').style.display = "none";
	document.querySelector('.img1').style.display = "block";
	document.querySelector('.page-sidebar').style.display = "none";
}

document.querySelector('.img1').addEventListener('click', addSidebar);
document.querySelector('.img2').addEventListener('click', removeSidebar);
