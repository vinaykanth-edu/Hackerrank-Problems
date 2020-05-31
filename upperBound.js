function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var [n, k] = input[0].split(' ').map(Number)
    var arr = input[1].split(' ').map(Number)
    arr.sort((a, b)=> a-b)
    // console.log(arr)
 
    
    function binarySearch(){
        let low = 0
        let high = n-1;
        let ans = -1;
        while(low <= high){
             let mid = low + Math.floor((high-low)/2)
             if(arr[mid] > k)
                 {
                     ans = mid
                     high = mid-1
                 }
            else
                {
                    low = mid+1;
                }
            
        }
         return ans
        
    }
    console.log(binarySearch())
    
} 