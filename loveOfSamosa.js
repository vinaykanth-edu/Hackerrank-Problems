function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let [N, K] = input[0].split(' ').map(Number)
    let arr = input[1].split(' ').map(Number)
     for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    // console.log(arr)
    let count = 0
    // let sum = 0
    for(let i=0; i<N; i++)
        {
            if(arr[i] <= K)
                {
                
                    K = K-arr[i]
                    // console.log(K)
                    count++
                    // console.log(count)
                    
                }
        }
    console.log(count)
    
} 
