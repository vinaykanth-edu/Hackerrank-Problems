input = input.split('\n')
    var arr =input[0].split(' ')
    var row = arr[0]
    var col = arr[1]
    var res=[]
    var count =0
    for(var k=1;k<=row;k++){
       input[k] = input[k].split("")
        res.push(input[k])
    }
    for(var i=0;i<row;i++){
      for(var j=0;j<col;j++){
         if(res[i][j] == "s"){
             if((i-3)>=0 && (j+3)<col){
                 if(res[i-1][j+1]=="a" && res[i-2][j+2]=="b" && res[i-3][j+3]=="a"){
                       count++
                 }
             }
             if((j+3)<col){
                    if(res[i][j+1]=="a" && res[i][j+2]=="b" && res[i][j+3]=="a"){
                       count++
                     }
             } 
             if((i+3)<row){
                    if(res[i+1][j]=="a" && res[i+2][j]=="b" && res[i+3][j]=="a"){
                       count++
                    } 
             }
             if((i+3)<row && (j+3)<col){
                    if(res[i+1][j+1]=="a" && res[i+2][j+2]=="b" && res[i+3][j+3]=="a"){
                        count++
                    }
            }
         }
       }
    }
    console.log(count)