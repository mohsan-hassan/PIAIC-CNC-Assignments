var courses = [];

for(var i=0;i<5;i++)
{
    var courseName = prompt("Enter course " + (i+1) + " name", "Course " + (i+1));
    courses[i]=courseName;
}

alert(courses);

for(var i=0; i<courses.length;i++)
{
    var courseName = prompt("Course " + (i+1), courses[i]);
    if(courseName != courses[i])
    {
        courses.splice(i,1,courseName);

        // same outout can be achieved by overwriting the value at specific index
        // courses[i] = courseName;
    }
}


alert(courses);