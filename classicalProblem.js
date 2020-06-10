// You are given a number N. Print all number from 1 to N (including N) in a new line under following conditions:

// For multiples of 5, print “Masai”
// For multiples of 7, print "School"
// For multiples of both 5 and 7, print "MasaiSchool"
// If all above conditions are not satisfied, print the number


function runProgram(input){
    var n = Number(input)
    console.log(n)
    for(let i=1; i<=n; i++ )
    {
      if((i%5 == 0 ) && (i%7 == 0))
      {
        console.log("MasaiSchool")
      }
      else if (i%7 == 0)
      {
        console.log("School")
      }
      else if (i%5 == 0)
      {
        console.log("Masai")
      }
      else
      {
        console.log(i)
      }
    console.log(i)
    }
 }

 runProgram("15")
 