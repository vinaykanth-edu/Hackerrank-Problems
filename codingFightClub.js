// Piyush went to fight for Coding Club. There were N soldiers with various powers. There will be Q rounds to fight and in each round Piyush's power will be varied. With power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M). After each round, All the soldiers who are dead in previous round will reborn.Such that in each round there will be N soldiers to fight. Count the number of soldiers that he can kill in each round and total sum of their powers.

// Input format:
// First line contains N
// 
// Next N line contains N integers which represents power of N soldiers
// 
// Next line contains Q
// 
// Next Q line contains Piyush's power for each of the Q rounds




function processData(input) {
    input = input.trim().split('\n')
    var n = +input[0]
    var arr = []
    for(var i=1; i<=n; i++)
        {
            arr.push(+(input[i]))
        }
    arr.sort((a, b) => a-b)
    for(var i=n+2; i<input.length; i++)
        {
            var res = findPower(arr, +(input[i]))
            var sum = 0
            for(var j=0; j<res; j++)
                {
                    sum = sum+arr[j]
                }
             console.log(res, sum)
        }
    
    // console.log(arr)
    function findPower(arr, M)
    {
        var low = 0;
        var high = n-1;
        while(low <= high)
            {
                var mid = low+Math.floor((high-low)/2)
                if(arr[mid] <= M)
                    {
                        low = mid+1
                    }
                else
                    {
                        high = mid-1
                    }
            }
        // console.log(low, mid, high)
        return low
    }
} 
