// Given a string S, count the number of times each character is present in the string.

// Print the character and number of times that character is present in the string separated by a space.

// Each character and the number of times it is present should be written in a new line The order of characters should be in Lexicographical order (See sample test case for better understanding)

function processData(input) {
    // console.log(input)
    function countLetters(str){
         let tempArr = str.split('').sort();
         let letters = [];
         let count = 1;
        for(let i=0; i<tempArr.length; i++)
            {
                if(tempArr[i] == tempArr[i+1])
                    {
                        count++
                    }
                else
                    {
                        let value = `${tempArr[i]} ${count}`
                        letters = [...letters, value];
                        // letters.push(value)
                        count = 1;
                    }
            }
        return letters.join('\n')
    }
    
    console.log(countLetters(input))
} 

processData("masaischool")