// Nikhil and his friend Sachin are on a quest to find the answer of Life.

// In order to complete it they need to answer Q queries on an array A having N integers. The queries can be of following two types:

// 0 x: Find the number of numbers in A which are not less than x.

// 1 x: Find the number of numbers in A which are greater than x.

// Help them complete the quest.


function processData(input) {
    input = input.trim().split('\n')
     const n = +(input[0])
     let arr = input[1].split(' ').map(Number)
     arr = arr.sort((a, b) => a-b)
     const q = +(input[2])
     for(let i=3; i<input.length; i++)
         {
            var [type, x] = input[i].split(' ').map(Number)
            if(type == 0)
                {
                    var res = typeZero(x)
                    console.log(n-res)
                }
             else
                 {
                     res = typeOne(x)
                     console.log(n-res)
                 }
            
         }
     function typeZero(target)
     {
         var low = 0
         var high = n-1
         while(low <= high)
             {
                 var mid = Math.floor((low+high)/2)
                 if(arr[mid] < target)
                     {
                         low = mid+1
                     }
                 else
                     {
                         high = mid-1
                     }
             }
         return low
     }
     function typeOne(target)
     {
         var low = 0;
         var high = n-1
         while(low <= high)
             {
                 var mid = Math.floor((low+high)/2)
                 if(arr[mid] <= target)
                     {
                         low = mid+1
                     }
                 else
                     {
                         high = mid-1
                     }
             }
         return low
     }
 } 
 