var a=2, b=1;
document.write("a : "  + a + " b : " + b);

var result=--a;

document.write("<br>");
document.write("---------------------------------");
document.write("<br>");
document.write("stage : --a" );
document.write("<br>");
document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("result is " + result);
document.write("<br>");
document.write("---------------------------------");
document.write("<br>");

a=2, b=1;
result=--a - --b;

document.write("---------------------------------");
document.write("<br>");
document.write("stage : --a - --b" );
document.write("<br>");
document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("result is " + result);
document.write("<br>");
document.write("---------------------------------");
document.write("<br>");

a=2, b=1;
result=--a - --b + ++b;

document.write("---------------------------------");
document.write("<br>");
document.write("stage : --a - --b + ++b" );
document.write("<br>");
document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("result is " + result);
document.write("<br>");
document.write("---------------------------------");
document.write("<br>");

a=2, b=1;
result=--a - --b + ++b + b--;

document.write("---------------------------------");
document.write("<br>");
document.write("stage : --a - --b + ++b + b--" );
document.write("<br>");
document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("result is " + result);
document.write("<br>");
document.write("---------------------------------");