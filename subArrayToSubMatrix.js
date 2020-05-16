function processData(input) {
    //Enter your code here
   
  
  input = input.split('\n')
  let [N, M, K] = input[0].split(' ').map(Number)
    // console.log(input)
    let matrix = []
    
    for(let i=1; i<=N; i++)
    {
      matrix.push(input[i].split(' ').map(Number))
    }
    
    for(let i=N+1; i<input.length; i++)
    {
      let [R, C, S, D] = input[i].split(' ').map(Number)
      var res = subArrayMatrix(R-1, C-1, S, D)
    }
    
    // console.log(res)
    for(let i=0; i<res.length; i++)
        {
            console.log(res[i].join(' '))
        }
    function subArrayMatrix(R, C, S, D){
      for(let i=R; i<R+S; i++)
      {
        for(let j=C; j<C+S; j++)
        {
          matrix[i][j] = matrix[i][j] + D
        }
      }
      return matrix
    }
    // console.log(matrix)
}

processData("4 4 2\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16\n2 3 2 5\n3 2 2 -3")