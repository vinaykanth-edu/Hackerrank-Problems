// Pavan is very fond of numbers.He made an array of numbers of length N , and he wants to know the pattern after rotating it to the left by k times. He got confused in the middle since the array is very big can you help him to find the rotated array?

// Sample Input
// 6 4
// 1 2 5 4 0 6

// Sample Output
// 0 6 1 2 5 4

function runProgram(input){
    input = input.split('\n')
    var [n, k] = input[0].split(' ').map(Number)
    // console.log(n, k)
    var arr = input[1].split(' ').map(Number)
    // console.log(arr)
    // console.log(arr)
    function rotate(arr, k)
    {
        let i=0;
        while(i<k){
            arr.push(arr.shift())
            
            i++
        }
        return arr
    };
    // console.log(arr)
    rotate(arr, k)
    console.log(arr.join(' '))
}

