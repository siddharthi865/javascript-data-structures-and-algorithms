/*String Access
For accessing characters, you use .chartAt().*/

console.log('elephant'.charAt(1)); // returns "l"

/*.charAt(index) takes an index (which starts at 0) and returns the character at that index location in the string.*/

/*For string (multiple-character) access, you can use .substring(startIndex,
endIndex), which will return the characters between the specified indices.*/

console.log('I am a good guy'.substring(1,6)); // returns ' am a'
console.log('YouTube'.substring(3,7)); // returns 'tube'

/*If you do not pass a second parameter (endIndex), it will return all the character values from the specified start position until the end.*/
console.log('YouTube'.substring(1)); // returns 'outube'