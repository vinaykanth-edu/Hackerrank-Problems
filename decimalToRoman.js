// Nick and Jack are good friends and both are very good at numbers, they want to play a fun game to know their understanding of numbers conversion into roman numerals.. Nick will give a number N and Jack has to guess the equivalent Roman Numeral. Jack can refer to the following table :

// image

// Description
// Be A Roman in Rome!

// Input Format
// Input consists of single integer N

// Output Format
// Print equivalent roman number in a single line.

// Constraints
// 1 <= N <= 3999

// Sample Input
// 2085

// Sample Output
// MMLXXXV





function runProgram(input){
    let n = +(input)
    var romanToNum = {
        
        M : 1000,
        CM : 900,
        D : 500,
        CD : 400,
        C : 100,
        XC : 90,
        L : 50,
        XL : 40,
        X : 10,
        IX : 9,
        V : 5,
        IV : 4,
        I : 1
    }
    
      let roman = "";
    
      function convert(n)
      {
          for(key in romanToNum)
            {
                while( n >= romanToNum[key])
                {
                    roman = roman + key;
                    n = n - romanToNum[key];
                }
            }
            return roman;
      };
      
      console.log(convert(n))
  }
  