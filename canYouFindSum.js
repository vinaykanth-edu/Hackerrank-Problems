// Teena is very good at competitive programming ,she solved enough problems on arrays and her friend wants to test her knowledge in arrays ,so gave her following task :
// 
// The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y where x is the largest number less than i such that A[x]>A[i] and y is the smallest number greater than i such that A[y]>A[i].
// 
// If there is no x < i such that A[x]>A[i], then take x=−1. Similarly, if there is no y>i such that A[y]>A[i], then take y=−1.
function processData(input) {
    //Enter your code here
     input = input.split('\n')
  var n = Number(input[0])
  var arr = input[1].split(' ').map(Number)
  var X = findX(n, arr)
  var Y = findY(n, arr)
  var res = []
  function findX(n, arr)
  {
    var left = []
    left[0] = 0
    var x = []
    x[0] = -1
    for(var i=1; i<n; i++)
    {
      while(left.length!=0 && arr[left[left.length-1]] <= arr[i])
      {
        left.pop()
      }
      if(left.length != 0)
      {
        x[i] = left[left.length - 1] + 1
      }
      else
      {
        x[i] = -1
      }
      left.push(i)
    }

    return x
    }
    function findY(n, arr){
      var right = []
      right[0] = n-1
      var y = []
      y[n-1] = -1
      for(var i=n-2; i>=0; i--)
      {
        while(right.length != 0 && arr[right[right.length-1]] <= arr[i])
        {
          right.pop()
        }
        if(right.length != 0)
        {
          y[i] = right[right.length - 1] + 1
        }
        else
        {
          y[i] = -1
        }
        right.push(i)
      }
      return y
    }
    for(let i=0; i< X.length; i++)
    {
      res.push(X[i] + Y[i])
    }
    console.log(res.join(' '))
} 
processData("5\n5 4 1 3 2")