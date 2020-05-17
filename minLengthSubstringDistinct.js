function processData(input) {
    function removeDuplicates(arr){
     var obj = {}
     for(let i=0; i<arr.length; i++)
     {
       obj[arr[i]]= arr[i]
     }
     var values = Object.values(obj)
     return values
   }
   
   var uniqArr = removeDuplicates(input)
   
   var len = uniqArr.length
   
   var min = Number.MAX_SAFE_INTEGER
   
   for(let i=0; i<input.length; i++)
   {
     for(let j=i+1; j<input.length+1; j++)
     {
       let subStr = input.substring(i, j)
       // console.log(subStr)
       if(subStr.length >= len)
       {
         var res = removeDuplicates(subStr)
         // console.log(res)
         if(res.length == len)
         {
           if(subStr.length < min)
           {
             min = subStr.length
             var ans = subStr
           }
         }
       }
       
     }
   }
   console.log(min)
   // console.log(uniqArr)
}