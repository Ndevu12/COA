
/**
 * This function takes a string as input and performs different transformations based on the length of the string.
 * 
 * @param {string} input - The string to be transformed.
 * 
 * @returns {string|array} - The transformed string or an array containing the reversed string and ASCII values of the original string.
 * 
 * If the length of the string is divisible by 15, the function will return an array containing two elements:
 * 1. The reversed string.
 * 2. A string of ASCII values of the original string characters separated by spaces.
 * 
 * If the length of the string is divisible by 3, the function will return the reversed string.
 * 
 * If the length of the string is divisible by 5, the function will return a string of ASCII values of the original string characters separated by spaces.
 * 
 * If the length of the string is not divisible by 15, 3, or 5, the function will return the original string.
 * 
 * @example
* 
* stringTransform('Transformations');
* // Expected output: ['snoitamrofsnarT', ' 84 114 97 110 115 102 111 114 109 97 116 105 111 110 115']
*/

const stringTransform = (input) => {
    let toASCII = '';
    let start = 0;
    let end = input.length - 1;
    let reversing = input.split('');

    if (input.length % 15 === 0){
    for (let index = 0; index < input.length; index++){

        // Convert each character to its ASCII value.
        toASCII += " " + input.charCodeAt(index);

        if (start < end){
        // Swap string characters to form reversed characters.
        let temp = reversing[start];
        reversing[start] = reversing[end];
        reversing[end] = temp;
        }

        start++;
        end--;
    }

    // combine back characters to form reversed string.
    let confirmedReversedString = reversing.join('');

        return [confirmedReversedString, toASCII];
    } else if (input.length % 3 === 0){
        let reversed = input.split('').reverse().join('');

        return reversed;
    } else if (input.length % 5 === 0){
        for (let index = 0; index < input.length; index++){
            toASCII += " " + input.charCodeAt(index);
        }
        return toASCII;
    }
    return input;
}


// Test cases
console.log('Transformations: ', stringTransform('Transformations')); // ['snoitamrofsnarT', '84 114 97 110 115 102 111 114 109 97 116 105 111 110 115']
console.log('Transform: ', stringTransform('Transform')); // 'mrofsnarT'
console.log('ASCII: ',stringTransform('ASCII')); // '65 83 67 73 73'
console.log('Hello: ', stringTransform('Hello')); // '72 101 108 108 111'
console.log('Example: ', stringTransform('Example')); // 'Example', no condition met