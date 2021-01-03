var subject1Marks = Number(prompt("Enter marks for subject 1"));
var subject2Marks = Number(prompt("Enter marks for subject 2"));
var subject3Marks = Number(prompt("Enter marks for subject 3"));
var totalMarks = Number(prompt("Enter total marks for 3 subjects"));

var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

if(totalObtainedMarks<=totalMarks){


var percentage = ( totalObtainedMarks / totalMarks) * 100;
var grade = "Fail";
var remarks = "Sorry";
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("<br>");

document.write("Total marks: " + totalMarks);
document.write("<br>");

document.write("Marks Obtained: " + totalObtainedMarks);
document.write("<br>");


document.write("Percentage: " + percentage.toFixed(0) + "%");
document.write("<br>");

document.write("Grade: " + grade);
document.write("<br>");

document.write("Remarks: " + remarks);
document.write("<br>");
}
else
{
    document.write("Obtained Marks cannot be greater than Total Marks. Try Again");
}