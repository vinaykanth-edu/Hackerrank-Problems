function closestNumbers(arr) {
    let sorted = arr.sort(function(a, b) {
        return a - b;
        });
    let min = sorted[1]-sorted[0]
    let res = []
    for(let i=0; i<sorted.length-1; i++)
        {
            for(let j=i+1; j<sorted.length; j++)
                {
                    let diff = (sorted[j]-sorted[i])
                    if(diff <= min){
                        if(diff<min){
                            min = diff
                            res=[]
                        }
                    res.push(arr[i], arr[j])
                        
                    }
                else{
                    break
                }
                }   
        }
    return res
}