// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  // applyFilter(reddify);
  // applyFilter(decreaseBlue);
  // applyFilter(increaseGreenByBlue);
  // applyFilterNoBackground(reddify);
  // applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for(var i = 0; i < image.length; i++){
    var currentRow = image[i];
    for(var j = 0; j < currentRow.length; j++){
      var rgbString = currentRow[j];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      // rgbNumbers[RED] = 255;
      rgbString = rgbArrayToString(rgbNumbers);
      currentRow[j] = rgbString;

    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for(var i = 0; i < image.length; i++){
    var currentRow = image[i];
    for(var j = 0; j < currentRow.length; j++){
      var rgbString = currentRow[j];
      // var rgbNumbers = rgbStringToArray(rgbString);
      // filterFunction(rgbNumbers);
      // // rgbNumbers[RED] = 255;
      // rgbString = rgbArrayToString(rgbNumbers);
      // currentRow[j] = rgbString;
      if (currentRow[j] !== backgroundColor){
        var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      // rgbNumbers[RED] = 255;
      rgbString = rgbArrayToString(rgbNumbers);
      currentRow[j] = rgbString;
      }

    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(number){
//   if (number < 0){
//     return 0;
// }else if (number > 255){
//   return 225;
// }else{
//   return number;
// }
var result1 = Math.max(number, 0);
var result2 = Math.min(result1, 255);
return result2;
}
// console.log(keepInBounds(-30)); // should print 0
// console.log(keepInBounds(300)); // should print 255
// console.log(keepInBounds(127)); // should print 127

// TODO 3: Create reddify function
function reddify(array){
  array[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(array){
  var number = array[BLUE] - 50;
  array[BLUE] = keepInBounds(number);
}
function increaseGreenByBlue (array){
  var number = array[GREEN] + array[BLUE];
  array[GREEN] = keepInBounds(number);
}

// CHALLENGE code goes below here
