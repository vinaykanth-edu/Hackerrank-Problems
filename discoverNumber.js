// You are given an array A of size N, and Q queries to deal with. For each query, you are given an integer X, and you're supposed to find out if X is present in the array A or not.

// Input Format

// The first line contains two integers, N and Q, denoting the size of array A and number of queries.

// The second line contains N space separated integers, denoting the array of elements Ai.

// The next Q lines contain a single integer X per line.


function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    let [N, Q] = input[0].split(' ').map(Number)
    let arr = input[1].split(' ').map(Number)
    arr.sort((a, b) => a-b)
    // console.log(arr)
      for(var i=2;i<Q+2;i++){
        var res = binarySearch(input[i])
        console.log(res)
      }
    
    function binarySearch(ele){
        var low=0
        var high = N-1
        var flag = false
        while(low<=high){
            var mid = low + Math.floor((high-low)/2)
            if(arr[mid] == ele){
                flag = true
                return "YES"
            }
            else if(arr[mid]>ele){
                high = mid-1
            }
            else{
                low = mid+1
            }
           
        }
        if(flag == false){
            return "NO"
        }
    }
    
    
   
} 
