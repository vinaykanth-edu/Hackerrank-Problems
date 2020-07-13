function processData(input) {
    input = input.split('\n');
    var n = +(input[0])
    var matrix = []
    for(var i=1; i<=n; i++)
        {
            matrix.push(input[i].split(' '))
        }
    // console.log(matrix)
    for(var j = 0; j < matrix.length; j++){
        for(var i = 0; i < matrix[j].length / 2; i++) {
                var temp = matrix[j][i];
                matrix[j][i] = matrix[j][matrix[j].length - i - 1];
                matrix[j][matrix[j].length - i - 1] = temp;
            }
    }
    
    for(let ele of matrix){
      console.log(ele.join(' '))   
    }
    
    // console.log(matrix)
} 