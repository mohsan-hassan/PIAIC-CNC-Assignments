var tempInCelsius=25;
var tempInFahrenheit = (tempInCelsius * 9/5)+32;
document.write(tempInCelsius + "&deg;C is " + tempInFahrenheit +"&deg;F");

tempInFahrenheit=70;
var tempToCelsius = (tempInFahrenheit - 32) * 5/9;
document.write("<br>")
document.write(tempInFahrenheit + "&deg;F is " + tempToCelsius +"&deg;C");