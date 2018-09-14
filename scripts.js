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
alert("equilateral")
}

else if (A===B  &&  A!==C || A===C  &&  A!==B || B===C  &&  B!==A){
alert("isosceles")
}

else if(A!==B && B!==C && A!==C){
alert("scalene")
}
else {
alert("NOT a triangle")
}
}

<html>
<head>

<title> Triangle type finder </title>
<script src="js/triangle.js"></script>
<link rel="stylesheet" type="text/css" href="css/triangle.css">
</head>

<body>
<h1> Triangle Type Finder </h1>
<div id = "images">
 <marquee behavior="alternate" hspace="">
                 <img src = "eq.jpg">
                 <img src = "iso.jpg">
                 <img src = "sca.jpg">
 </marquee>
</div>
<br>
<br>
<br>

<button id="check" type="submit" onclick="triangle();">Click To Enter 3 Sides of a triangle </button>

</body>
</html>

Message Input


Message @Kamadidouglas
