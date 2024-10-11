function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          return true; 
        }
      }
    }
    return false; 
  
  // Test examples
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Output: true
  console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   // Output: true
  console.log(hasTargetSum([1, 2, 5], 4));              // Output: false
  
}

/* 
  Write the Big O time complexity of your function here
*/
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true; 
      }
    }
  }
  return false; 
}

// Test examples
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Output: true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   // Output: true
console.log(hasTargetSum([1, 2, 5], 4));              // Output: false


/* 
  Add your pseudocode here
  Start the function called hasTargetSum that takes an array and a target number.
For each number in the array:
For each following number in the array:
If the sum of the first number and the second number equals the target:
Return true.
If no pairs are found after checking all possibilities:
Return false.
*/

/*
  Add written explanation of your solution here
  The function hasTargetSum aims to determine if there are two distinct numbers in a given array that add up to a specified target number.

Iterating Through the Array: The function uses two nested loops to check each possible pair of numbers in the array. The outer loop picks one number, and the inner loop checks every subsequent number for a possible sum.

Checking the Sum: For each pair of numbers selected (the current number from the outer loop and the current number from the inner loop), the function calculates the sum. If this sum equals the target number, the function immediately returns true, indicating that a valid pair has been found.

Completing the Search: If the loops complete without finding any pairs that add up to the target, the function returns false. This means no two numbers in the array can combine to meet the target sum.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
