// You have an empty sequence, and you will be given N queries. Each query is one of these three types:

// 1 x  -Push the element x into the stack.
// 2    -Delete the element present at the top of the stack.
// 3    -Print the maximum element in the stack.

function processData(input) {
    input = input.split('\n')
    const n = Number(input.shift())
    let mainStack = []
    let maxStack = []
    let maximum = Number.MIN_SAFE_INTEGER
    for(let i=0; i<n; i++)
        {
            switch(input[i])
                {
                    case '2':
                          var top = mainStack.pop();
                    
                            if (top == maximum)
                                {
                                    maxStack.pop()

                                    if (maxStack.length > 0)
                                        {
                                           maximum = maxStack[maxStack.length - 1] 
                                        }

                                }

                            if(mainStack.length == 0)
                                {
                                    maximum = Number.MIN_SAFE_INTEGER                            
                                }
                
                             break;
                     case '3':
                                console.log(maximum)
                        break;
                     
                    default:
                        var number = Number(input[i].split(' ')[1])
                        if(number >= maximum)
                            {
                                maximum = number
                                maxStack.push(number)
                            }

                        mainStack.push(number)
                        break;
                }
        }
}

processData('10\n1 97\n2\n1 20\n2\n1 26\n1 20\n2\n3\n1 91\n3')