var courses = [];

var course1 = prompt("Course 1", "course 1");
courses.push(course1);

var course2 = prompt("Course 2", "course 2");
courses.push(course2);

var course3 = prompt("Course 3", "course 3");
courses.push(course3);

var course4 = prompt("Course 4", "course 4");
courses.push(course4);

var course5 = prompt("Course 5", "course 5");
courses.push(course5);

alert(courses);



var course1NewName = prompt("Course 1", course1);
if(course1NewName != course1)
{
    courses.splice(0,1, course1NewName);
}

var course2NewName = prompt("Course 2", course2);
if(course2NewName != course2)
{
    courses.splice(1,1, course2NewName);
}

var course3NewName = prompt("Course 3", course3);
if(course3NewName != course3)
{
    courses.splice(2,1, course3NewName);
}

var course4NewName = prompt("Course 4", course4);
if(course4NewName != course4)
{
    courses.splice(3,1, course4NewName);
}

var course5NewName = prompt("Course 5", course5);
if(course5NewName != course5)
{
    courses.splice(4,1, course5NewName);
}

alert(courses);