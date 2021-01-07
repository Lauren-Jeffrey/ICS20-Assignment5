let diameter;
let circumference;
let area;

document.getElementById("findarea").addEventListener("click", areafunction)
function areafunction(){
diameter = document.getElementById("diametera").value
diameter = +diameter;
let radius = diameter/2;
let π = 3.14;
area = π*radius*radius;
alert(area)
}
document.getElementById('diameterc').addEventListener('click', circumferencefunction)
function circumferencefunction(){
diameter = document.getElementById("diameterc").value
diameter = +diameter;
let radius = diameter/2;
let π = 3.14;
circumference = π*2*radius;
alert(circumference)
}
