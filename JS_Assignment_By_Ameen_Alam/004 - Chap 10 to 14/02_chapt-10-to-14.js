var totalMarks = 500;

var  subject1 = Number(prompt("Enter obtained marks for Subject 1"));
var  subject2 = Number(prompt("Enter obtained marks for Subject 2"));
var  subject3 = Number(prompt("Enter obtained marks for Subject 3"));
var  subject4 = Number(prompt("Enter obtained marks for Subject 4"));
var  subject5 = Number(prompt("Enter obtained marks for Subject 5"));

var totalObtainedMarks = subject1+subject2+subject3+subject4+subject5;
var percentage = (totalObtainedMarks*100)/totalMarks;

alert("Percentage is : " + percentage);