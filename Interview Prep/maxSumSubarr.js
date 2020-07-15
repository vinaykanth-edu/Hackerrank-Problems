// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let [n, k] = input[0].split(' ').map(Number)
    let arr = input[1].split(' ').map(Number)
    // let stack = [];
   let maxSum = 0,
    subArrSum = 0,
    subArrStart = 0;

  for (var window_end = 0; window_end < arr.length; window_end++) {
    subArrSum += arr[window_end]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, subArrSum);
      subArrSum -= arr[subArrStart]; // subtract the element going out
      subArrStart += 1; // slide the window ahead
    }
  }
  console.log(maxSum);
} 
