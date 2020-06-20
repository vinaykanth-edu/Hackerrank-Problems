// Problem
// You are given a 3*3 matrix (2 dimensional array) that represents the final situation of a Tic Tac Toe. 
// 
// You task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', print 'x'(without quotes).
// 
// If the winner is 'o', print 'o' (without quotes)
// 
// In case the match ended in a tie, print "Tie" (without quotes)
// 
// sample input:
// x o x
// o x x
// o o o

function runProgram(input){
    
    input=input.split("\n")
    
    var arr=[]
    for(let i=0;i<input.length;i++){
        arr.push(input[i].split(" "))
    }
    // console.log(arr)
    
    
    var out=checkResult(arr)
    
    console.log(out)
    
    
        function checkResult(arr){
        
        
        for(var i=0;i<arr.length;i++){
             ///rows
            
            if(arr[i][0]==arr[i][1] && arr[i][1]==arr[i][2]){
                return arr[i][0]
            }
            
            ////columns
            
            else if(arr[0][i]==arr[1][i]  && arr[1][i]==arr[2][i]){
                return arr[0][i]
            }
        
        }
        
        
         ///diagonal left
        if(arr[0][0]==arr[1][1]  && arr[1][1]==arr[2][2]){
            return arr[0][0]
        }
        
        
        ///diagonal right
      else  if(arr[0][2]==arr[1][1]  && arr[1][1]==arr[2][0]){
            return arr[0][2]
        }
        
        else{
            return "Tie"
        }
        
     
        
    }
}


