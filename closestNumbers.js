// Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.

// For example, if you've got the list , sort it as  to see that several pairs have the minimum difference of : . The return array would be .

// Given a list of unsorted integers, , find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find them all.

// Function Description

// Complete the closestNumbers function in the editor below. It must return an array of integers as described.

// closestNumbers has the following parameter(s):

// arr: an array of integers

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