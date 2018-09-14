function triangleType(){
var lengths = []

lengths.push(parseInt(prompt("enter first side")));
lengths.push(parseInt(prompt("enter second side")));
lengths.push(parseInt(prompt("enter third side")));

var A = sides[0];
var B = sides[1];
var C = sides[2];

/* console.log(lengths); */
if (A===B  &&  B===C && A===C){
alert("equilateral");
}

else if (A===B  &&  A!==C || A===C  &&  A!==B || B===C  &&  B!==A){
alert("isosceles");
}

else if(A!==B && B!==C && A!==C){
alert("scalene");
}
else {
alert("NOT a triangle");S
}
}
