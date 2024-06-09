# COA coding challenges

This directory contains two coding challenges which are the following:

1. Array Manipulation
2. String Transformation

## 1: Array Manipulation

This challenge involves determining if there exists a contiguous subarray within a given array of integers that sums up to a target value. Return true if such a subarray exists; otherwise, return false.

### Algorithm used for array manipulation

The algorithm utilizes the prefix subarray sum technique to iterate over the array while maintaining the sums of different subarrays. If it finds a subarray with the target sum, it returns true. If not, it continues iterating until the end of the array and returns false.

### Time and Space Complexity

- `Time complexity It has: 0(n):` This is because the algorithm iterates through the array once using the two pointers approach.
pointers are those variables called: left which points on left side and right which points on right side.

- `Space complexity It has: 0(1):` because my algorithm use a constant amount of extra space regardless of the size of the input array. Itis only using a few variables to keep track of the left pointer, right pointer, and the sum.


## 2: String Transformation

Given a string, transform it based on the following rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the specified order.

### Algorithm used for string transformation

To solve this problem, I implemented the function which checks if the string length is divisible by 15, 3, or 5. I have started by handling the case or condition where length of the string will be equal to 15.

To handle this, I have Converted each character to its ASCII value before reversing the string. I did both in one for loop.

Here is step by step

Depending on the condition met, the function performs the appropriate transformations:

- For strings divisible by 15, it reverses the string and converts each character to its ASCII value, but It convert every character before being reversed.
- I have used one for loop together with fi statement to help me to keep check condition to reverse is still met.
- For strings divisible by 3, it uses the built-in reverse method.
- For strings divisible by 5, it converts each character to its ASCII code by iterating over the character array

### Time and Space Complexity

- `Time complexity It has: 0(n):` This is because the function performs a series of operations based on the length of the input string, but the number of operations is directly proportional to the length of the string.

- `Space complexity It has: 0(1):` In the worst case scenario, the function may create an array of ASCII values that is the same length as the input string, resulting in linear space complexity.

# Getting started

## Pre-requisites

- IDE or text editor
- Install node.js version >= 14.x

## Setup

- Clone repository on your own machine:

```javascript  
https://github.com/Ndevu12/COA.git
```

- Navigate to directory

```javascript
cd COA
cd Challenges
```

- Run

```javascript 
node stringTransform.js
```

OR

- Run 

```javascript
node arrayMap.js
```

## TESTING

### Testing function for Array Manipulation challenge

To test *prefixSubArraySum* function for Array Manipulation, I have tested it on different test cases.

The `stringTransform` function takes a string as input and performs different transformations based on the length of the string. Here are some examples of how to use this function:

```javascript
console.log(stringTransform('HelloWorld!')); 
```

Here are some examples test cases:

### `Array manipulation`

First

```javascript
const nums1 = [23, 43, 5, 5, 6, 6, 76, 778, 788, 554, 334, 5666, 77];
const target1 = 10; // Example target
console.log(prefixSubArraySum(nums1, target1)); // Expected output: true
```

Second

```javascript
const nums2 = [1, 2, 3, 4, 5];
const target2 = 6; // Example target
console.log(prefixSubArraySum(nums2, target2)); // Expected output: true
```

Third

```javascript
const nums3 = [2, 4, 6, 8, 10];
const target3 = 14; // Example target
console.log(prefixSubArraySum(nums3, target3)); // Expected output: false
```

Fourth

```javascript
const nums4 = [-1, -2, -3, -4, -5];
const target4 = -10; // Example target
console.log(prefixSubArraySum(nums4, target4)); // Expected output: true
```

Firth

```javascript
const nums5 = [100, 200, 300, 400, 500];
const target5 = 1000; // Example target
console.log(prefixSubArraySum(nums5, target5)); // Expected output: true
```

Sixith

```javascript
const nums6 = [3, 1, 7, 11, 5, 6, 2, 8];
const target6 = 20; // Example target
console.log(prefixSubArraySum(nums6, target6)); // Expected output: false
```

### `String Transformation`

First

```javascript
console.log(stringTransform('Transformations')); 
// Expected output: ['snoitamrofsnarT', '84 114 97 110 115 102 111 114 109 97 116 105 111 110 115']
```

Second

```javascript
console.log(stringTransform('Transform'));
// Expected output: 'mrofsnarT'
```

Third

 ```javascript
console.log(stringTransform('ASCII')); 
// Expected output: '65 83 67 73 73'
```

Fourth

```javascript
console.log(stringTransform('Hello')); 
// Expected output: '72 101 108 108 111'
```

Firth

```javascript
console.log(stringTransform('Example')); 
// Expected output: 'Example' (no condition met)
```

## Conclusion

This README provides a comprehensive overview of the two coding challenges, their respective algorithms, time and space complexity analyses, setup instructions, and test cases. These challenges demonstrate different algorithmic techniques and how to apply them effectively.