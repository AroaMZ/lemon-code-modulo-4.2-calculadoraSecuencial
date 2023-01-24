function extraction() {
    num = document.getElementById("num").value;
    return parseFloat(num);

}

function add(num, total) {
    total = extraction(num) + parseFloat(total);
    return parseFloat(total);
}
function deduct(num, total) {
    total = extraction(num) - parseFloat(total);
    return parseFloat(total);
}
function mult(num, total) {
    total = extraction(num) * parseFloat(total);
    return parseFloat(total);
}
function div(num, total) {
    total = extraction(num) / parseFloat(total);
    return parseFloat(total);
}
function validation(num) {
    var num = extraction();
    if (isNaN(num)) {
        alert("inserta un numero");
        return false
    }
    else {
        return true
    }
}


var result;
var memoria = 0;

result = document.getElementById("add").addEventListener("click", function () {
    var num = extraction();
    if (validation(num) == true) {
        memoria = (add(num, memoria))
    }
    else {
        document.getElementById("finalResult").innerHTML = "Error. Introduce numeros correctos"
    }
});

result = document.getElementById("deduct").addEventListener("click", function () {
    if (validation() == true) {
        memoria = (deduct(num, memoria))
    }
    else {
        document.getElementById("finalResult").innerHTML = "Error. Introduce numeros correctos"
    }
});
result = document.getElementById("mult").addEventListener("click", function () {
    if (validation() == true) {
        memoria = (mult(num, memoria))
    }
    else {
        document.getElementById("finalResult").innerHTML = "Error. Introduce numeros correctos"
    }
});
result = document.getElementById("div").addEventListener("click", function () {
    if (validation() == true) {
        memoria = (div(num, memoria))
    }
    else {
        document.getElementById("finalResult").innerHTML = "Error. Introduce numeros correctos"
    }
});
result = document.getElementById("result").onclick = function () {

    document.getElementById("finalResult").innerHTML = memoria;

};



