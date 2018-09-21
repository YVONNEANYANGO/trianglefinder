function triangleType() {

var sideA = parseInt(document.getElementById('1').value);
var sideB = parseInt(document.getElementById('2').value);
var sideC = parseInt(document.getElementById('3').value);
var outputs = document.getElementById("outputs");

if (sideA===sideB && sideB===sideC && sideA===sideC){
  outputs.innerHTML =("Equilateral");
}

else if (sideA===sideB && sideA!==sideC || sideA===sideC && sideA!==sideB || sideB===sideC && sideB!==sideA){
  outputs.innerHTML =("Isosceles")
}
else if(sideA>= (sideB+sideC) || sideB>=(sideA+sideC) || sideC>=(sideA+sideB) ){
  outputs.innerHTML =("Not a triangle")
}

else if(sideA!==sideB && sideB!==sideC && sideA!==sideC){
  outputs.innerHTML =("Scalene")
}

else {
outputs.innerHTML =("Not a triangle")
}
// else if(sideA<= (sideB+sideC) || sideB<=(sideA+sideC) || sideC<=(sideA+sideB) ){
//   outputs.innerHTML =("Not a triangle")
}
