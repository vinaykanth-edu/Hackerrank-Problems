// Given a string of both uppercase and lowercase alphabets, the task is to print the string with alternate occurrences of any character dropped(including space and consider upper and lowercase as same).


function processData(input) {
    //Enter your code here
    var obj = {}
    var str = ''
    for(var i=0; i<input.length; i++)
        {
            var char = input[i].toLowerCase()
            if(obj[char] > 0)
                {
                    obj[char]++
                }
            else
                {
                    obj[char] = 1
                }
            if(obj[char]%2 == 1)
                {
                    str = str+input[i]
                }
        }
    console.log(str)
} 