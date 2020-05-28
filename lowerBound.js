// You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of first number which is same as k, in case the number is not present, print -1 (here answer is given considering index to be starting from 0)



function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var [n, k] = input[0].split(' ').map(Number)
    var arr = input[1].split(' ').map(Number)
    var res = lowerBound(arr, n, k)
    console.log(res)
    function lowerBound(arr, n, k)
    {
        var low = 0;
        var high = n-1;
        var ans = -1;
        while(low<=high)
            {
                var mid = low + Math.floor((high-low)/2);
                if(arr[mid] == k)
                    {
                        ans = mid
                        high = mid-1
                    }
                else
                    {
                        // ans = mid
                        low= mid+1
                    }
            }
        return ans
    }
} 
