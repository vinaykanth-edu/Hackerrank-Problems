// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram.

// Given 2 phrases, write a program that detects if both are anagrams of each other.

// If both are anagrams, print "True"

// Else print "False"

function runProgram(input){
    input = input.split('\n')
    
    // console.log(str2)
    function checkAnagram(str1, str2)
    {
      var str1 = input[0].split('').sort()
      var str2 = input[1].split(' ').join('').split('').sort()
      if(str1.length !== str2.length)
      {
        console.log("False")
      }
      str1.forEach(function(currentEle, index){
        if(str2[index] !== currentEle)
        {
          console.log("False")
        }
      })
      console.log("True")
    }

    checkAnagram()
  }
  
  runProgram("anagram\nnag a ram")
  