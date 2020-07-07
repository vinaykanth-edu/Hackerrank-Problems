function runProgram(input){
    input = input.split('\n')
    var n = +(input[0])
    var arr = input[1].split(' ').map(Number)
    var low = 0
    var high = n-1
    while(low<high)
    {
        var temp = arr[low]
        arr[low] = arr[high]
        arr[high] = temp
        low++
        high--
     }
     console.log(arr.join(' '))
  }
  
  