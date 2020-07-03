function runProgram(input){
    var n = +(input)
    var res = 1
    for(let i=n; i>=1; i--)
    {
      res = res * i
    }
    console.log(res)
}

