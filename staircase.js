// // **************************************
// // Method-1
// // **************************************

function staircase(n) {
  var height = n;
  for (var i=0 ; i < height; i++) {
    var row= "";
    for (var j=0 ; j < height; j++) {
      if (i + j > height - 2 ) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
staircase(6)


// // **************************************
// // Method-2
// // **************************************
function processData(input) {
  var n = parseInt(input);

  for(var i = 0; i < n; i++)
  {
      var s = "";
      for(var j = 0; j < n; j++)
      {
          if(n - i - 2 < j)
          {
              s += "#";
          }
          else
          {
              s += " ";
          }
      }
      console.log(s);
  }
}

processData(6)

// // **************************************
// // Method-3
// // **************************************

var staircase = "",
    n = 6,
    space = " ",
    hash = "#";
for(var i = n ; i > 0 ;i--){
    staircase+=space.repeat(i-1).concat(hash.repeat(n-(i-1))) + "\n";
}
console.log(staircase);