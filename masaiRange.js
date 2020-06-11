// You have an array of N numbers, and two integers K and P. If the given array contains more than or equal to K numbers in the Masai range X-P to X+P (both inclusive) for any integer X, then print "NO" (without quotes).

// In all other case, print "YES"


function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    var tcs = Number(input[0])
    var line = 1
    for(var i=0; i<tcs; i++)
        {
            var [n, k, p] = input[line].trim().split(' ').map(Number)
            line++
            var arr = input[line].trim().split(' ').map(Number).sort((a, b)=> a-b)
            line++
            var res = findRange(arr, n, k, p)
            console.log(res)
        }
    
    function findRange(arr, n, k, p)
    {
        for(var j=0; j<n; j++)
            {
                var target = arr[j]+2*p
                var upperbound= upperBound(j, n-1, target)
                var count = upperbound - j
                if(count >= k)
                    {
                        return "NO"
                    }
            }
        return "YES"
    }
    
    function upperBound(lo, hi, target)
    {
        while(lo <= hi)
            {
                var mid = lo + Math.floor((hi -lo)/2)
                if(arr[mid] <= target)
                    {
                        lo = mid+1
                    }
                else
                    {
                        hi = mid-1
                    }
            }
        return lo
    }
} 
