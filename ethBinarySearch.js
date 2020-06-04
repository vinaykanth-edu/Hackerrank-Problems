// Given a sorted array with repeating integers. You need to find the first occurence , last occurence and count of a given key in the array. USE ONLY BINARY SEARCH. Your algorithm should run in LogN time.If element is not present print -1 -1 0.


function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var n = +(input[0])
    var arr = input[1].split(' ').map(Number)
    var key = +(input[2])
    var firstOccurence = lowerBound()
    // console.log(firstOccurence)
    var lastOccurence = upperBound()
    // console.log(lastOccurence)
    if(firstOccurence == -1 )
        {
            console.log(-1, -1, 0)
        }
    else
        {
            var count = lastOccurence - firstOccurence + 1;
            console.log(firstOccurence, lastOccurence, count)
        }
    function lowerBound(){
        var low = 0;
        var high = n-1;
        var ans = -1;
        while(low <= high)
            {
                var mid = low + Math.floor((high-low)/2)
                if(arr[mid] == key)
                    {
                        ans = mid;
                        high = mid-1
                    }
                else if(arr[mid] > key)
                    {
                        high = mid-1
                    }
                else
                    {
                        low = mid+1
                    }
            }
        return ans
    }
     function upperBound(){
        var low = 0;
        var high = n-1;
        var ans = -1;
        while(low <= high)
            {
                var mid = low + Math.floor((high-low)/2)
                if(arr[mid] == key)
                    {
                        ans = mid;
                        low = mid+1
                    }
                else if(arr[mid] > key)
                    {
                        high = mid-1
                    }
                else
                    {
                        low = mid+1
                    }
            }
        return ans
    }
    
} 
