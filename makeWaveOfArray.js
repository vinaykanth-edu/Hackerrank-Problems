// Given an array of length N , sort the array into a wave-like pattern.

// An array is sorted in waveform if arr0 >= arr1 <= arr2 >= arr3 <= arr4 >= and so on ...

// Sample Input
// 10
// 9 8 4 10 3 6 5 7 1 2

// Sample Output
// 2 1 4 3 6 5 8 7 10 9

function runProgram(input){
    input = input.split('\n')
    var n = +(input[0])
    var arr = input[1].split(' ').map(Number)
    
    function wave(A) {
         A.sort(function(a, b){return a - b});
        
         for (let i = 1; i < A.length; i=i+2) {
             
             let temp = A[i];
             A[i] = A[i-1];
             A[i-1]=temp;
         }
         return A;
     }
 
     var res = wave(arr)
     console.log(res.join(' '))
 }
 
 