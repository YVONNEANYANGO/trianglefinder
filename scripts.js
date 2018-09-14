var length=function(class) {return document.getElementByClass(class);}
var lengths = "Type of a triangle";
var lengthA = "Equilateral";
var lengthB = "Isosceles";
var lengthC = "Scalene";

if (A===B && B===C && C===A) {
    alert("Equilateral");
} else if ((A===B) || (B===C) || (C===A)) {
    alert("Isosceles");
} else if (A!==B && B!==C &&C!==A) {
    alert("Scalene");
} else {
    alert("Not a triangle");
}
