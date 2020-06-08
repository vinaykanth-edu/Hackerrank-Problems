function runProgram(input){
    input = input.split('\n')
    var [n, num] = input[0].split(' ').map(Number)
    var array = input[1].split(' ').map(Number).sort((a, b) => (a-b))
    var low = 0;
    var high = n-1;
    var ans = -1;
  
    console.log(BinarySearch(array,low,high,num));
    
   function BinarySearch(array,low,high,num)
    {
    var mid;
   
    if(low > high)
    {
      return -1;
    }
  
    mid=Math.floor(low+(high-low)/2);
  
    
    if (num == array[mid])
    {
        return 1;
    }
    
    else if (num<array[mid])
    {
        return BinarySearch(array,low,mid-1,num);
    }
    
    else 
    {
        return BinarySearch(array,mid+1,high,num);
    }
    
  }
  }
  