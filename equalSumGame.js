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
