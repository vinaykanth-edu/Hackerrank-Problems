function runProgram(input){
    var str = input;
    var count = 1;
    var sum = 0;
    for(var i=0; i<str.length-1; i++)
    {
        if(str[i] == str[i+1])
        {
            count++
        }
        else
        {
            sum += count*(count+1)/2 
            count = 1
        }
    }
    
    sum += count*(count+1)/2 
    console.log(sum)
  }
  
  