function processData(input) {
    // let str = input.toLowerCase().split(" ").join("").split(".").join("").split(",").join("").split("?").join("")
    let str = input.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
    let n = str.length;
    var isPalindrome = true;
    function palindrome(str) {
        
        for(let i=0; i<n; i++)
            {
                if(str[i]!==str[n-(i+1)])
                    {
                        isPalindrome = false;
                        break;
                     }
                else
                    {
                        isPalindrome = true;
                    }
            }
        
        console.log(isPalindrome ? 'YES' : 'NO')
    }
    palindrome(str)
} 