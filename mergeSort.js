function runProgram(input){
// console.log(input)
    input = input.split('\n')
    var n = +(input[0])
    var arr = input[1].split(' ').map(Number)
    const mergesort = arr => {
        if(arr.length <= 1)
        {
            return arr
        }
        const middleIndex = Math.floor(arr.length/2)
        const leftArr = arr.slice(0, middleIndex);
        const rightArr = arr.slice(middleIndex);
        
        return merge(mergesort(leftArr), mergesort(rightArr)) ; 
    };

    const merge = (leftArr, rightArr) => {
        const output = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while(leftIndex < leftArr.length && rightIndex < rightArr.length)
        {
            const leftEl = leftArr[leftIndex];
            const rightEl = rightArr[rightIndex];
            if(leftEl < rightEl)
            {
                output.push(leftEl);
                leftIndex++
            }
            else
            {
                output.push(rightEl);
                rightIndex++
            }
        }
        return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
    }
}

runProgram("5\n3 5 0 9 8")


// /////////////////////////////////////////////////////////////////////////////////////////

function runProgram(input){
    input = input.split("\n")
      var n = Number(input[0])
      var arr = input[1].trim().split(" ").map(Number)
      var low = 0
      var high = n-1    
      mergeSort(low,high)
      function mergeSort(low,high){
          if(low<high){
              var mid = Math.floor((low+high)/2)
              mergeSort(low,mid)
              mergeSort(mid+1,high)
              merge(low,mid,high)
          }
      }
      function merge(low,mid,high){
          // console.log(low,high)
          var i=low
          var j=mid+1
          var result = []
          while(i<=mid && j<=high){
              if(arr[i]<arr[j]){
                  result.push(arr[i])
                  // console.log(arr[i],"i",arr[j])
                  i++
              }
              else{
                  result.push(arr[j])
                  // console.log(arr[j],"j")
                  j++
              }
          }
          if(i<=mid){
              while(i<=mid){
                  result.push(arr[i])
                  i++
              }
          }
          if(j<=high){
               while(j<=high){
                  result.push(arr[j])
                   j++
              }
          }
          // console.log(result)
          var index = 0
          for(var k=low; k<=high; k++){
              arr[k] = result[index]
              index++
          }    
      }
      console.log(arr.join(" "))
  }
  