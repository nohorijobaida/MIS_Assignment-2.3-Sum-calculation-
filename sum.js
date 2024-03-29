function calculateSum() {
   // var sum= parseInt(document.getElementById("sum").value);
    var sum = 0;
    for (var i = 400; i <= 450; i++) {
        sum += i;
    }
    document.getElementById("result").innerHTML = "Sum of numbers between 400 and 450: " + sum;
}

window.onload = function() {
    calculateSum();
}