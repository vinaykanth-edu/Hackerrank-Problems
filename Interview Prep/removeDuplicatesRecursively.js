// Given a string s, recursively remove adjacent duplicate characters from the string s. The output string should not have any adjacent duplicates.

// If string become empty after removing duplicates print "Empty String" else print the output string.


function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var tcs = +(input[0])
    for(var i=1; i<=tcs; i++)
        {
            var str=input[i]
            var out = removeDuplicates(str, str.length)
            console.log(out)
        }
    function removeDuplicates(str, n)
    {
        if(str == "")
            {
                return "Empty String"
            }
        var res = []
        var i = 1
        while(i<str.length)
            {
                if(str[i-1] != str[i])
                    {
                        res.push(str[i-1])
                    }
                else
                    {
                        while(i<str.length && str[i-1] == str[i])
                            {
                                i++
                            }
                    }
                i++
            }
        res.push(str[i-1])
        var s = res.join('')
        if(s.length != n)
            {
                return removeDuplicates(s, s.length)
            }
        return s
    }
} 