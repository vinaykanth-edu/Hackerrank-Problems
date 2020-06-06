function main(input){
    input = input.split('\n')
    var n = +(input[0])
    for(var i=1; i<input.length; i++)
    {
        var [l, r] = input[i].split(' ').map(Number)
        check(l, r)
    }
    function check(l, r)
    {
        var count = 0;
        for(var i=l; i<=r; i++)
        {
            if(i%4 != 2)
            {
                count++
            }
        }
        console.log(count)
    }
}
main("3\n1 2\n4 6\n1 8")
