// You are given a strings S, write a recursive function to print reverse of the given string.


// Method-I:

function runProgram(input){
    input = input
    function reverseString(str) {
      if (str === "")
        return "";
      else
        return reverseString(str.substr(1)) + str.charAt(0);
    }
    console.log(reverseString(input));
}

// Method-II: 
function runProgram(input){
    var str = input;
    var output = reverseString(str);
    console.log(output)

    function reverseString(str){
        if(str.length === 0)
        {
            return ''
        }
        else
        {
            return str[str.length - 1] +reverseString(str.substring(0, str.length-1))
        }
    }
}