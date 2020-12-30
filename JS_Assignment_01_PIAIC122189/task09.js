var num1 = Number(prompt("Enter number 1"));
var opr = prompt("Select Operation ( +, -, *, /, % )");
var num2 = Number(prompt("Enter number 2"));

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

document.write(operation + " of " + num1 + " and " + num2 + " is " +result);