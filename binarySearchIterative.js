// Given n distinct numbers, implement iterative binary search to check the presence of target number k.

// In case k is present among those n numbers, print 1 Else print -1

function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let [n, k] = input[0].split(' ').map(Number)
    var inputArr = input[1].split(' ').map(Number)
     
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    
    const binarySearch = (inputArr, k) => {
     let startIndex = 0;
     let endIndex = inputArr.length - 1;
    
     while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if(k === inputArr[middleIndex] ) {
          return console.log("1");
        }
        if(k > inputArr[middleIndex]) {
        
          startIndex = middleIndex + 1;
        }
        if(k < inputArr[middleIndex]) {
        
          endIndex = middleIndex - 1;
        }
     }
  
    console.log("-1");
  }
    binarySearch(inputArr, k)
} 
