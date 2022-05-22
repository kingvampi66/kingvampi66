let pot1 = "";
let pot2 = "";
let pot3 = 0;
let operator = 0;
let eqaulConf = false;

function eins() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num1').value;
        pot2 = pot2 + document.getElementById('num1').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num1').value;
        pot2 = pot2 + document.getElementById('num1').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num1').value;
        pot2 = pot2 + document.getElementById('num1').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num1').value;
        pot2 = pot2 + document.getElementById('num1').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num1').value;
        pot1 = pot1 + document.getElementById('num1').value;
    } {

    } {

    } {

    }

}

function zwei() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num2').value;
        pot2 = pot2 + document.getElementById('num2').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num2').value;
        pot2 = pot2 + document.getElementById('num2').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num2').value;
        pot2 = pot2 + document.getElementById('num2').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num2').value;
        pot2 = pot2 + document.getElementById('num2').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num2').value;
        pot1 = pot1 + document.getElementById('num2').value;
    } {

    } {

    } {

    }
}

function drei() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num3').value;
        pot2 = pot2 + document.getElementById('num3').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num3').value;
        pot2 = pot2 + document.getElementById('num3').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num3').value;
        pot2 = pot2 + document.getElementById('num3').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num3').value;
        pot2 = pot2 + document.getElementById('num3').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num3').value;
        pot1 = pot1 + document.getElementById('num3').value;
    } {

    } {

    } {

    }
}

function vier() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num4').value;
        pot2 = pot2 + document.getElementById('num4').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num4').value;
        pot2 = pot2 + document.getElementById('num4').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num4').value;
        pot2 = pot2 + document.getElementById('num4').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num4').value;
        pot2 = pot2 + document.getElementById('num4').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num4').value;
        pot1 = pot1 + document.getElementById('num4').value;
    } {

    } {

    } {

    }
}

function fuenf() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num5').value;
        pot2 = pot2 + document.getElementById('num5').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num5').value;
        pot2 = pot2 + document.getElementById('num5').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num5').value;
        pot2 = pot2 + document.getElementById('num5').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num5').value;
        pot2 = pot2 + document.getElementById('num5').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num5').value;
        pot1 = pot1 + document.getElementById('num5').value;
    } {

    } {

    } {

    }
}

function sechs() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num6').value;
        pot2 = pot2 + document.getElementById('num6').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num6').value;
        pot2 = pot2 + document.getElementById('num6').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num6').value;
        pot2 = pot2 + document.getElementById('num6').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num6').value;
        pot2 = pot2 + document.getElementById('num6').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num6').value;
        pot1 = pot1 + document.getElementById('num6').value;
    } {

    } {

    } {

    }
}

function sieben() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num7').value;
        pot2 = pot2 + document.getElementById('num7').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num7').value;
        pot2 = pot2 + document.getElementById('num7').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num7').value;
        pot2 = pot2 + document.getElementById('num7').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num7').value;
        pot2 = pot2 + document.getElementById('num7').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num7').value;
        pot1 = pot1 + document.getElementById('num7').value;
    } {

    } {

    } {

    }
}

function acht() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num8').value;
        pot2 = pot2 + document.getElementById('num8').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num8').value;
        pot2 = pot2 + document.getElementById('num8').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num8').value;
        pot2 = pot2 + document.getElementById('num8').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num8').value;
        pot2 = pot2 + document.getElementById('num8').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num8').value;
        pot1 = pot1 + document.getElementById('num8').value;
    } {

    } {

    } {

    }
}

function neun() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num9').value;
        pot2 = pot2 + document.getElementById('num9').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num9').value;
        pot2 = pot2 + document.getElementById('num9').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num9').value;
        pot2 = pot2 + document.getElementById('num9').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num9').value;
        pot2 = pot2 + document.getElementById('num9').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num9').value;
        pot1 = pot1 + document.getElementById('num9').value;
    } {

    } {

    } {

    }
}

function nully() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num0').value;
        pot2 = pot2 + document.getElementById('num0').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 + pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num0').value;
        pot2 = pot2 + document.getElementById('num0').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 - pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num0').value;
        pot2 = pot2 + document.getElementById('num0').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 * pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num0').value;
        pot2 = pot2 + document.getElementById('num0').value;
        pot1 = parseFloat(pot1);
        pot2 = parseFloat(pot2);
        pot3 = pot1 / pot2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('num0').value;
        pot1 = pot1 + document.getElementById('num0').value;
    } {

    } {

    } {

    }
}

function doty() {
    if (operator == 1) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('dot').value;
        pot2 = pot2 + document.getElementById('dot').value;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
        console.log(pot1);
        console.log(pot2);
        console.log(pot3);
    } else if (operator == 2) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('dot').value;
        pot2 = pot2 + document.getElementById('dot').value;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 3) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('dot').value;
        pot2 = pot2 + document.getElementById('dot').value;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else if (operator == 4) {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('dot').value;
        pot2 = pot2 + document.getElementById('dot').value;
        document.getElementById("textBox2").value = " " + "=" + " " + pot3;
    } else {
        document.getElementById("textBox1").value = document.getElementById("textBox1").value + document.getElementById('dot').value;
        pot1 = pot1 + document.getElementById('dot').value;
    } {

    } {

    } {

    }
}

function divy() {
    if (operator == 1) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "/" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 4;
    } else if (operator == 2) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "/" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 4;
    } else if (operator == 3) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "/" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 4;
    } else if (operator == 4) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "/" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
    } else {
        operator = 4;
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        document.getElementById("textBox1").value = pot1 + " " + "/" + " ";
    } {

    } {

    } {

    }
}

function multy() {
    if (operator == 1) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "*" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 3;
    } else if (operator == 2) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "*" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 3;
    } else if (operator == 3) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "*" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
    } else if (operator == 4) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "*" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 3;
    } else {
        operator = 3;
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        document.getElementById("textBox1").value = pot1 + " " + "*" + " ";
    } {

    } {

    } {

    }
}

function subty() {
    if (operator == 1) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "-" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 2;
    } else if (operator == 2) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "-" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
    } else if (operator == 3) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "-" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 2;
    } else if (operator == 4) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "-" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 2;
    } else {
        operator = 2;
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        document.getElementById("textBox1").value = pot1 + " " + "-" + " ";
    } {

    } {

    } {

    }
}

function sumty() {
    if (operator == 1) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "+" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
    } else if (operator == 2) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "+" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 1;
    } else if (operator == 3) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "+" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 1;
    } else if (operator == 4) {
        pot1 = pot3;
        document.getElementById("textBox1").value = pot1 + " " + "+" + " ";
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        pot2 = "";
        operator = 1;
    } else {
        operator = 1;
        document.getElementById("textBox2").value = " " + "=" + " " + pot1;
        document.getElementById("textBox1").value = pot1 + " " + "+" + " ";
        console.log(pot1);
        console.log(pot2);
        console.log(pot3);
    } {

    } {

    } {

    }
}

function clearAll() {
    document.getElementById("textBox1").value = "";
    document.getElementById("textBox2").value = "";
    pot1 = "";
    pot2 = "";
    operator = 0;
}

function equaly() {
    document.getElementById("textBox1").value = pot3;
    console.log(pot1);
    console.log(pot2);
    console.log(pot3);
}