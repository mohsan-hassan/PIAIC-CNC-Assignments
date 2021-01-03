var trafficSignalColor = prompt("Enter Traffic Signal Color (Red, Yellow, Green)");
if (trafficSignalColor.toLowerCase() == "red") {
    alert("You Must Stop !");
} else if (trafficSignalColor.toLowerCase() == "yellow") {
    alert("You are Ready to move");
} else if (trafficSignalColor.toLowerCase() == "green") {
    alert("You Must Move");
} else {
    alert("Invalid traffic signal color");
}