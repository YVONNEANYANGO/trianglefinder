function triangleType() {

var sideA = parseInt(document.getElementById('1').value);
var sideB = parseInt(document.getElementById('2').value);
var sideC = parseInt(document.getElementById('3').value);
var outputs = document.getElementById("outputs");

if (sideA===sideB && sideB===sideC && sideA===sideC){
  outputs.innerHTML ="<p>Equilateral</p>";
}

else if (sideA===sideB && sideA!==sideC || sideA===sideC && sideA!==sideB || sideB===sideC && sideB!==sideA){
console.log("Isosceles");
}

else if(sideA!==sideB && sideB!==sideC && sideA!==sideC){
console.log("Scalene");
}
else {
console.log("NOT a triangle");
}
}
