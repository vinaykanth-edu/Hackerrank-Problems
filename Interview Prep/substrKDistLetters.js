function processData(input) {
    input = input.split('\n')
    var [n, k] = input[0].split(' ').map(Number)
    var str = input[1]
    var obj = {}
    var count = 0
    for(var i=0; i<k; i++)
        {
            if(obj[str[i]]>0)
                {
                    obj[str[i]]++
                }
            else
                {
                    obj[str[i]] = 1
                }
        }
    var keys = Object.keys(obj)
    if(keys.length == k)
        {
            count++
        }
    for(var i=k; i<n; i++)
        {
            if(obj[str[i]] > 0)
                {
                    obj[str[i]]++
                }
            else
                {
                    obj[str[i]] = 1
                }
            if(obj[str[i-k]] > 0)
                {
                    obj[str[i-k]]--
                }
            if(obj[str[i-k]] == 0)
                {
                    delete obj[str[i-k]]
                }
            keys = Object.keys(obj)
            if(keys.length == k)
                {
                    count++
                }
        }
    console.log(count)
} 
