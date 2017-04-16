var coorTop = 0;
var coorLeft = 0;
var INT_LEFT_MAX = 10;
var INT_LEFT_MIN = -10;
var arrConstTop = [10, -10];

function animation() {
    var CONST_LEFT = Math.random() * (INT_LEFT_MAX - INT_LEFT_MIN) + INT_LEFT_MIN;
    var CONST_TOP = arrConstTop[Math.floor(Math.random() * (arrConstTop.length))];

    if ((document.querySelector('.round').style.top == "") &&
        (document.querySelector('.round').style.left == "")) {
        CONST_LEFT = Math.abs(CONST_LEFT);
        CONST_TOP = Math.abs(CONST_TOP);
    }

    if (CONST_TOP > 0) {
        var animationPlusTop = setInterval(function() {

            var CONST_LEFT_INDICATOR = Math.floor(parseInt(document.querySelector('.round').style.left));

            if (CONST_LEFT_INDICATOR >= 440) {
                CONST_LEFT = -(Math.abs(CONST_LEFT));
            }

            if (CONST_LEFT_INDICATOR <= 0) {
                CONST_LEFT = Math.abs(CONST_LEFT);
            }

            if (document.querySelector('.round').style.top == "440px") {
                clearInterval(animationPlusTop);

                var animationMinusTop = setInterval(function() {

                    if (document.querySelector('.round').style.top == "10px") {
                        clearInterval(animationMinusTop);
                        animation();
                    } else {

                        document.querySelector('.round').style.top = coorTop + 'px';
                        document.querySelector('.round').style.left = coorLeft + 'px';
                        coorTop = coorTop - CONST_TOP;
                        coorLeft = coorLeft + CONST_LEFT;
                        if (Math.floor(coorLeft) >= 450) {
                            coorLeft = 450;
                        }
                        if (Math.floor(coorLeft) <= 0) {
                            coorLeft = 0;
                        }
                        if (coorLeft == 450 || coorLeft == 0) {
                            clearInterval(animationMinusTop);
                            animation();
                        }

                    }
                }, 50);

            } else {

                document.querySelector('.round').style.left = coorLeft + 'px';
                document.querySelector('.round').style.top = coorTop + 'px';
                coorTop = coorTop + CONST_TOP;
                coorLeft = coorLeft + CONST_LEFT;
                if (Math.floor(coorLeft) >= 450) {
                    coorLeft = 450;
                }
                if (Math.floor(coorLeft) <= 0) {
                    coorLeft = 0;
                }
                if (coorLeft == 450 || coorLeft == 0) {
                    clearInterval(animationPlusTop);
                    animation();
                }

            }


        }, 50);
    } else {



        var animationPlusTopReverse = setInterval(function() {

            var CONST_LEFT_INDICATOR = Math.floor(parseInt(document.querySelector('.round').style.left));

            if (CONST_LEFT_INDICATOR >= 440) {
                CONST_LEFT = -(Math.abs(CONST_LEFT));
            }

            if (CONST_LEFT_INDICATOR <= 0) {
                CONST_LEFT = Math.abs(CONST_LEFT);
            }

            if (document.querySelector('.round').style.top == "10px") {
                clearInterval(animationPlusTopReverse);

                var animationMinusTopReverse = setInterval(function() {

                    if (document.querySelector('.round').style.top == "440px") {
                        clearInterval(animationMinusTopReverse);
                        animation();
                    } else {

                        document.querySelector('.round').style.top = coorTop + 'px';
                        document.querySelector('.round').style.left = coorLeft + 'px';
                        coorTop = coorTop - CONST_TOP;
                        coorLeft = coorLeft + CONST_LEFT;
                        if (Math.floor(coorLeft) >= 450) {
                            coorLeft = 450;
                        }
                        if (Math.floor(coorLeft) <= 0) {
                            coorLeft = 0;
                        }
                        if (coorLeft == 450 || coorLeft == 0) {
                            clearInterval(animationMinusTopReverse);
                            animation();
                        }

                    }
                }, 50);

            } else {

                document.querySelector('.round').style.left = coorLeft + 'px';
                document.querySelector('.round').style.top = coorTop + 'px';
                coorTop = coorTop + CONST_TOP;
                coorLeft = coorLeft + CONST_LEFT;
                if (Math.floor(coorLeft) >= 450) {
                    coorLeft = 450;
                }
                if (Math.floor(coorLeft) <= 0) {
                    coorLeft = 0;
                }
                if (coorLeft == 450 || coorLeft == 0) {
                    clearInterval(animationPlusTopReverse);
                    animation();
                }

            }


        }, 50);


    }
}

document.querySelector('.round').addEventListener('click', animation);