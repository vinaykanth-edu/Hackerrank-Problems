// sample input:
// 5 4
// 0 0 0 0
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4


function runProgram(input){
    input = input.split('\n')
    var [n, m] = input[0].split(' ').map(Number)
    var matrix = []
    var res = []
    for(var i=1; i<input.length; i++)
    {
        matrix.push(input[i].split(' '))
    }
  
  for(var i=0; i<m; i++)
  {
      let inner = []
      for(var j=0; j<n; j++)
      {
          inner.push(matrix[j][i])
      }
      
      res.push(inner)
  }
  for(let ele of res){
      console.log(ele.join(' '))
      
  }
  
  }
  