// You are given an array of n integers. You have to equalize all elements of the array in minimum possible operation.
// 
// In ONE operation, you can increase any of the n-1 elements of the array by 1. That is, except for one element of the array, you can increment all other integers by 1.
// 
// Output the minimum number of operations required to equalize all elements of array.

// 3
// 1 2 3

function runProgram(input){
    input = input.split("\n")
      var arr = input[1].split(" ").map(Number)
      var sum =0
      var min = 100
      for(var i=0;i<arr.length;i++){
        sum += arr[i]
        if(arr[i]<min){
          min = arr[i]
        }
      }
      var res = sum -(arr.length *min)
      console.log(res)
  }
  
  