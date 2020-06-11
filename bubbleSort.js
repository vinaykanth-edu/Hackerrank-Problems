// Hassan has discovered his own sorting algorithm. The algorithm has following conditions:

// Given an integer k, sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

// If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

// Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.


function runProgram(input){
    input = input.split('\n')
    var [n, k]= input[0].split(' ').map(Number)
    var arr = input[1].split(' ').map(Number)
    let swapped;

    function bubbleSort(arr)
    {
        swapped = false;
        for(let i=0; i<n; i++)
          {
            if((arr[i] % k) > (arr[i+1] % k))
            {
                swapped = true;
                let tmp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = tmp
            }
      
          }
          n--
    }

    do{
        bubbleSort(arr)
    } while(swapped)

    console.log(arr.join(' '))
  }
  

  runProgram("5 6\n12 18 17 65 46")