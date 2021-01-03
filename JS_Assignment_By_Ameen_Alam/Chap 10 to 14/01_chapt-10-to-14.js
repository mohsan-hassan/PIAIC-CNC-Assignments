var num1 = Number(prompt("Enter number 1"));
var num2 = Number(prompt("Enter number 2"));
var opr = prompt("Select Operation ( +, -, *, /, % )");

var operation;
var result;
if(opr =="+")
{
    operation = "Addition";
result = num1 + num2;
}
else if(opr =="-")
{
    operation = "Subtraction";
result = num1 - num2;
}
else if(opr =="*")
{
    operation = "Multiplication";
result = num1 * num2;
}
else if(opr =="/")
{
    operation = "Division";
result = num1 / num2;
}
else if(opr =="%")
{
    operation = "Modulus";
result = num1 % num2;
}


var resultString = num1 + " " +  opr + " " + num2 + " = " + result; 
alert(resultString);