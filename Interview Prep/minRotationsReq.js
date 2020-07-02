// Problem
// You are given a string S you have to find the minimum rotations required to get the same string. For string "aaaa" the minimum rotations will be 1.

// sample input Explanation : s = "masai" After 5 rotations we will get the same string hence the result will be 5

function runProgram(input){
    var str = input.split("")
    var count = 0;
    
    for(var i=0; i<str.length; i++)
    {
        // console.log(str.unshift( str.pop()))
        str.push(str.shift())
        count++
        
        if(str.join("") === input)
        {
            console.log(count)
            break
        }
    }
}

