// You have n (n is always even) currency notes which has a positive integer written on it.

// Your country has n / 2 people. Each person gets two currency notes, each note is given to exactly one person.

// As a king of the country, find the way to distribute currency notes such that the sum of values written on it is equal for each resident of your country.

// Note: It is guaranteed that it is always possible.
// Input Format

// The first line of the input contains integer n — the number of currency notes. It is guaranteed that n is even.

// The second line contains the sequence of n positive integers a1, a2, ..., an (1 ≤ ai ≤ 100), where ai is equal to the number written on the i-th note.

function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var n = Number(input[0])
    var arr = input[1].split(' ').map(Number)
    var min = Math.min(...arr)
    var max = Math.max(...arr)
    
    var target = min + max
    for(var i=0; i<n-1; i++)
        {
            for(var j=i+1; j<n; j++)
                {
                    if(arr[i] + arr[j] == target)
                        {
                            console.log(i+1, j+1)
                            arr[i]=0
                            arr[j]=0
                            break
                        }
                }
            // console.log(arr)
        }   
    
} 
processData("6\n1 5 7 4 4 3")
