var coorTop = 0;
var coorLeft = 0;
var INT_LEFT_MAX = 10;
var INT_LEFT_MIN = -10;
var arrConstTop = [10, -10];
var ballPosition = document.querySelector('.round');

function animation() {

    var CONST_LEFT = Math.random() * (INT_LEFT_MAX - INT_LEFT_MIN) + INT_LEFT_MIN;
    var CONST_TOP = arrConstTop[Math.floor(Math.random() * (arrConstTop.length))];

    if ((ballPosition.style.top === "") &&
        (ballPosition.style.left === "")) {
        CONST_LEFT = Math.abs(CONST_LEFT);
        CONST_TOP = Math.abs(CONST_TOP);
    }

    if (CONST_TOP > 0) {

        var animationPlusTop = setInterval(function() {

            var CONST_LEFT_INDICATOR = Math.floor(parseInt(ballPosition.style.left));

            if (CONST_LEFT_INDICATOR >= 440) {
                CONST_LEFT = -(Math.abs(CONST_LEFT));
            }

            if (CONST_LEFT_INDICATOR <= 0) {
                CONST_LEFT = Math.abs(CONST_LEFT);
            }

            if (ballPosition.style.top === "440px") {
                clearInterval(animationPlusTop);

                var animationMinusTop = setInterval(function() {

                    if (ballPosition.style.top === "10px") {
                        clearInterval(animationMinusTop);
                        animation();
                    } else {

                        ballPosition.style.top = coorTop + 'px';
                        ballPosition.style.left = coorLeft + 'px';
                        coorTop = coorTop - CONST_TOP;
                        coorLeft = coorLeft + CONST_LEFT;
                        if (Math.floor(coorLeft) >= 450) {
                            coorLeft = 450;
                        }
                        if (Math.floor(coorLeft) <= 0) {
                            coorLeft = 0;
                        }
                        if (coorLeft === 450 || coorLeft === 0) {
                            clearInterval(animationMinusTop);
                            animation();
                        }

                    }
                }, 50);

            } else {

                ballPosition.style.left = coorLeft + 'px';
                ballPosition.style.top = coorTop + 'px';
                coorTop = coorTop + CONST_TOP;
                coorLeft = coorLeft + CONST_LEFT;
                if (Math.floor(coorLeft) >= 450) {
                    coorLeft = 450;
                }
                if (Math.floor(coorLeft) <= 0) {
                    coorLeft = 0;
                }
                if (coorLeft === 450 || coorLeft === 0) {
                    clearInterval(animationPlusTop);
                    animation();
                }

            }


        }, 50);
    } else {



        var animationPlusTopReverse = setInterval(function() {

            var CONST_LEFT_INDICATOR = Math.floor(parseInt(ballPosition.style.left));

            if (CONST_LEFT_INDICATOR >= 440) {
                CONST_LEFT = -(Math.abs(CONST_LEFT));
            }

            if (CONST_LEFT_INDICATOR <= 0) {
                CONST_LEFT = Math.abs(CONST_LEFT);
            }

            if (ballPosition.style.top === "10px") {
                clearInterval(animationPlusTopReverse);

                var animationMinusTopReverse = setInterval(function() {

                    if (ballPosition.style.top === "440px") {
                        clearInterval(animationMinusTopReverse);
                        animation();
                    } else {

                        ballPosition.style.top = coorTop + 'px';
                        ballPosition.style.left = coorLeft + 'px';
                        coorTop = coorTop - CONST_TOP;
                        coorLeft = coorLeft + CONST_LEFT;
                        if (Math.floor(coorLeft) >= 450) {
                            coorLeft = 450;
                        }
                        if (Math.floor(coorLeft) <= 0) {
                            coorLeft = 0;
                        }
                        if (coorLeft === 450 || coorLeft === 0) {
                            clearInterval(animationMinusTopReverse);
                            animation();
                        }

                    }
                }, 50);

            } else {

                ballPosition.style.left = coorLeft + 'px';
                ballPosition.style.top = coorTop + 'px';
                coorTop = coorTop + CONST_TOP;
                coorLeft = coorLeft + CONST_LEFT;
                if (Math.floor(coorLeft) >= 450) {
                    coorLeft = 450;
                }
                if (Math.floor(coorLeft) <= 0) {
                    coorLeft = 0;
                }
                if (coorLeft === 450 || coorLeft === 0) {
                    clearInterval(animationPlusTopReverse);
                    animation();
                }

            }


        }, 50);


    }

}

function anim_stop() {
    location.reload();
}

document.querySelector('.move_ball').addEventListener('click', animation);

document.querySelector('.stop_ball').addEventListener('click', anim_stop);
