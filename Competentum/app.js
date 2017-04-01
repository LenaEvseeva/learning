
/*
var start = Date.now(); // сохранить время начала

var timer = setInterval(function() {
  // вычислить сколько времени прошло с начала анимации
  var timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // конец через 2 секунды
    return;
  }

  // рисует состояние анимации, соответствующее времени timePassed
  draw(timePassed);

}, 20);

// в то время как timePassed идёт от 0 до 2000
// left принимает значения от 0 до 400px
function draw(timePassed) {
  document.querySelector('.round').style.left = 5 + 'px';
  document.querySelector('.round').style.top = timePassed / 5 + 'px';
}

*/

var i = 0;
function animation() {
var timer = setInterval(function() {
	
		if(document.querySelector('.round').style.top == "440px") {
			clearInterval(timer);
			
			var timertop = setInterval(function() {
				if(document.querySelector('.round').style.top == "10px"){
					clearInterval(timertop);
					animation();
				} else {
					document.querySelector('.round').style.top = i + 'px';
					document.querySelector('.round').style.left = i + 'px';
					i = i - 10;
				}
			}, 50);
			
		} else {
			document.querySelector('.round').style.left = i + 'px';
			document.querySelector('.round').style.top = i + 'px';
			i = i + 10;
		}
 
	
}, 50);
}
 
document.querySelector('.round').addEventListener('click', animation);










