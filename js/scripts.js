// BACKEND
function isEquilateral(side1, side2, side3){
  if(side1 === side2 && side2 === side3){
    return true;
  } else {
    return false;
  }
}

function notATriangle(side1, side2, side3){
  if(((side3 + side2) <= side1) || ((side3 + side1) <= side2) || ((side1 + side2) <= side3)) {
    return true;
  } else {
    return false;
  }
}

function isIsosceles(side1, side2, side3){
  if ((side1 === side2) || (side1 === side3) || (side3 === side2)) {
    return true;
  } else {
    return false;
  }
}


// FRONTEND
$(document).ready(function() {
  $("#form-triangleTracker").submit(function(event) {
    event.preventDefault();
    var sideLeft = parseInt($("#sideLeft").val());
    var sideRight = parseInt($("#sideRight").val());
    var bottom = parseInt($("#sideBottom").val());

    if (notATriangle(sideLeft, sideRight, bottom)){
      $("#whatTriangle").text("That is NOT a triangle!");
    } else if (isEquilateral(sideLeft, sideRight, bottom)){
      $("#whatTriangle").text("That is a Equilateral!");
    } else if (isIsosceles(sideLeft, sideRight, bottom)){
      $("#whatTriangle").text("That is a Isosceles!");
    } else {
      // THE PART THAT PUTS TEXT INTO THE "whatTriangle" ID
      $("#whatTriangle").text("That is a Scalene");
    }
    $("#whatTriangle").show();
  });
});
