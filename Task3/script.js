function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
 }
 
 function Result() {
    var num1 = document.getElementById('res').value;
    try {
       var num2 = eval(num1);
       if (isNaN(num2) || !isFinite(num2)) {
          throw new Error("Invalid expression");
       }
       document.getElementById('res').value = num2;
    } catch (error) {
       document.getElementById('res').value = "Error";
    }
 }

 document.addEventListener("DOMContentLoaded", function () {
    // Attach click event listeners to buttons
    var buttons = document.querySelectorAll('.btn button');
    buttons.forEach(function (button) {
       button.addEventListener('click', function () {
          var value = button.textContent;
          if (value === '←') {
             Back();
          } else {
             Solve(value);
          }
       });
    });
 });
 