$(document).ready(function() {
 $("#form-triangleTracker").submit(function(event) {
   event.preventDefault();
   var sideLeft = parseInt($("#sideLeft").val());
   var sideRight = parseInt($("#sideRight").val());
   var bottom = parseInt($("#sideBottom").val());

   if ((bottom + sideRight) <= sideLeft) {
      alert("Not a triangle");
   } else if ((bottom + sideLeft) <= sideLeft) {
      alert("Not a triangle");
   } else if ((sideLeft + sideRight) <= bottom) {
      alert("Not a triangle");
   } else if(sideLeft === sideRight && sideRight === bottom){
     alert("Equilateral");
   } else if (sideLeft === sideRight) {
      alert("2sides are good");
   } else if (sideLeft === bottom) {
      alert("2sides are good");
   } else if (bottom === sideRight) {
      alert("2sides are good");
   } else {
     // THE PART THAT PUTS TEXT INTO THE "whatTriangle" ID
     $("#whatTriangle").text("Scalene");
   }
   $("#whatTriangle").show();
 });
});
